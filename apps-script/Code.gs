/**
 * Temp Alert — the Google Apps Script that watches your temperature sensors
 * and emails people when one goes too cold or too hot.
 *
 * WHAT IT DOES
 *   · Every 15 minutes it reads the latest temperature from each sensor on
 *     the "Alerts" tab — a LI-COR sensor (with your LI-COR Cloud token), a
 *     NEWA weather station, or a National Weather Service station.
 *   · Each sensor can have its own alerts: "at or below 32 °F → email these
 *     people", "at or above 95 °F → email those people".
 *   · It emails ONCE when a reading crosses the line, and once more when it
 *     is back to normal (a couple of degrees past the line, so a reading
 *     hovering right at 32 does not send twenty emails).
 *   · If a sensor stops reporting, it says so — a dead sensor must never
 *     look like a quiet night.
 *   · Every email it sends is written on the "Alert log" tab.
 *
 * WHAT IT CAN REACH (the permissions are set in appsscript.json, which the
 * app's Setup page gives you too):
 *   · "spreadsheets.currentonly" — THIS spreadsheet only.
 *   · "script.external_request" — to read the weather stations and LI-COR.
 *   · "script.send_mail" — to send the alert emails, from your address.
 *   · "script.scriptapp" — to run itself every 15 minutes while you sleep.
 *   It never reads your email, your Drive or any other sheet.
 *
 * HOW TO INSTALL (once — the app's Setup page walks through it)
 *   1. In a new Google Sheet: Extensions → Apps Script. Delete what is there,
 *      paste this whole file, click Save.
 *   2. Project Settings (gear) → tick "Show appsscript.json manifest file in
 *      editor". Back in the Editor, open appsscript.json, replace everything
 *      in it with the app's appsscript.json, click Save.
 *   3. Deploy → New deployment → type "Web app". Execute as: Me. Who has
 *      access: Anyone. Click Deploy and allow the permissions. Google warns
 *      "This app hasn't been verified" — normal for a script in your own
 *      sheet: Advanced → Go to (project) (unsafe) → Allow.
 *      Copy the "Web app URL" (it ends in /exec) into the app's Setup page.
 *   "Anyone" lets the app (and your crew's phones) read the latest readings
 *   without a Google sign-in. The email addresses and the LI-COR token are
 *   never sent to anyone without the setup password.
 *
 * SETUP PASSWORD: the first time the app saves, the password typed there
 * becomes the setup password. To reset it: Project Settings (gear) → Script
 * properties → delete SETUP_KEY.
 *
 * WITHOUT THE APP: pick "startChecking" in the function list at the top of
 * the editor and click Run — that turns on the 15-minute check. "stopChecking"
 * turns it off; "sendTestEmail" sends a test to everyone on the Alerts tab.
 *
 * After editing this code, publish the change with Deploy → Manage
 * deployments → edit (pencil) → Version: New version → Deploy.
 */

var ALERTS = 'Alerts';
var SETTINGS_TAB = 'Settings';
var LOG = 'Alert log';
var CHECK_EVERY_MIN = 15;
var SUBJECT_TAG = '[Temp Alert]';

var ALERT_HEADERS = ['Sensor', 'Source', 'Station / sensor ID', 'Alert when', 'Temperature (°F)', 'Email to', 'On'];
var LOG_HEADERS = ['Sent', 'Sensor', 'What happened', 'Reading (°F)', 'Reading time', 'Alert at (°F)', 'Emailed to'];
// [key, label on the Settings tab, default]
var SETTINGS = [
  ['title', 'Title', ''],
  ['staleMinutes', 'Not reporting after (minutes)', 120],
  ['margin', 'Back to normal margin (°F)', 2],
  ['sendClear', 'Send back-to-normal emails', true],
  ['appUrl', 'Status page', ''],
];
var SOURCES = { licor: 'LI-COR', newa: 'NEWA station', nws: 'Weather Service station' };
var SOURCE_FROM_LABEL = { 'li-cor': 'licor', 'licor': 'licor', 'newa station': 'newa', 'newa': 'newa',
  'weather service station': 'nws', 'nws': 'nws', 'national weather service': 'nws' };

/* ── web app entry points ─────────────────────────────────────────────── */

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'ping') return json_({ ok: true });
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    return json_(publicView_(ss));
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    lock.waitLock(25000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var check = checkKey_(body.key);
    if (body.action === 'checkKey') return json_(check);
    if (!check.ok) return json_(check);
    // A sheet with no password yet takes the first one it is given — the
    // owner sets it in the app's Setup right after deploying.
    if (check.first) setProp_('SETUP_KEY', String(body.key));
    if (body.action === 'setup') { writeConfig_(ss, body.config || {}); return json_(ownerView_(ss)); }
    if (body.action === 'load') return json_(ownerView_(ss));
    if (body.action === 'licor') return json_(licorAction_(body));
    if (body.action === 'checking') { setChecking_(!!body.on); return json_(ownerView_(ss)); }
    if (body.action === 'checkNow') { runCheck_(ss, Date.now()); return json_(ownerView_(ss)); }
    if (body.action === 'test') return json_(sendTest_(ss, body.to));
    return json_({ ok: false, error: 'Unknown action.' });
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) { /* never acquired */ }
  }
}

// What anyone with the link may see: readings and alert states, never the
// email addresses (a forwarded link must not hand out the crew's addresses).
function publicView_(ss) {
  var cfg = readConfig_(ss);
  return {
    ok: true, sheetName: ss.getName(), title: cfg.title,
    status: statusOf_(cfg, readState_()), checking: isChecking_(),
    lastCheck: Number(getProp_('LAST_CHECK') || 0) || null,
    hasKey: !!getKey_(), hasLicor: !!getProp_('LICOR_TOKEN'),
  };
}
function ownerView_(ss) {
  var v = publicView_(ss);
  v.config = readConfig_(ss);
  v.quota = mailQuota_();
  return v;
}

/* ── the check (every 15 minutes) ─────────────────────────────────────── */

// The trigger's entry point. Skips quietly if a check is already running.
function checkAll() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try { runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); } finally { lock.releaseLock(); }
}

// Run from the editor to turn checking on without the app (and to give the
// permissions the first time).
function startChecking() { setChecking_(true); runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); }
function stopChecking() { setChecking_(false); }
function sendTestEmail() { return sendTest_(SpreadsheetApp.getActiveSpreadsheet(), null); }

function runCheck_(ss, now) {
  var cfg = readConfig_(ss);
  var state = readState_();
  var next = {};
  var token = getProp_('LICOR_TOKEN');
  var tz = tz_(ss);
  var sent = [];
  cfg.sensors.forEach(function (s) {
    var key = sensorKey(s);
    var reading = null, error = '';
    try { reading = readSensor_(s, token, tz, now); } catch (err) { error = String((err && err.message) || err); }
    var out = evaluate(s, reading, state[key] || null, cfg, now);
    out.state.error = error;
    next[key] = out.state;
    out.events.forEach(function (ev) { sent.push(deliver_(ss, cfg, s, ev, tz)); });
  });
  setProp_('STATE', JSON.stringify(next));
  setProp_('LAST_CHECK', String(now));
  return sent;
}

/**
 * Pure: one sensor, its newest reading (or null when it could not be read),
 * what we knew last time → the new state and the emails to send.
 *   state = { temp, at, checked, stale, rules: { "below:32": "ok" | "alert" } }
 * A reading counts only while it is younger than staleMinutes; a sensor whose
 * newest reading is older than that (or that never answered) is "not
 * reporting", and its alerts hold their last state until it is back.
 */
function evaluate(sensor, reading, prev, cfg, now) {
  prev = prev || { rules: {}, stale: false };
  var staleMs = Math.max(15, Number(cfg.staleMinutes) || 120) * 60000;
  var margin = Math.max(0, Number(cfg.margin) || 0);
  var last = reading && isFinite(reading.temp) ? reading : (prev.at ? { temp: prev.temp, at: prev.at } : null);
  var state = { temp: last ? last.temp : null, at: last ? last.at : null, checked: now, stale: false, rules: {} };
  var events = [];
  var everyone = recipients_(sensor);
  for (var k in prev.rules) state.rules[k] = prev.rules[k];

  if (!last || now - last.at > staleMs) {
    state.stale = true;
    if (!prev.stale && everyone.length) events.push({ type: 'stale', to: everyone, temp: state.temp, at: state.at });
    return { state: state, events: events };
  }
  if (prev.stale && everyone.length) events.push({ type: 'back', to: everyone, temp: last.temp, at: last.at });

  state.rules = {};
  (sensor.alerts || []).forEach(function (a) {
    if (!validAlert_(a)) return;
    var k = ruleKey(a);
    var was = prev.rules[k] || 'ok';
    var t = Number(a.temp), v = last.temp;
    var hit = a.when === 'below' ? v <= t : v >= t;
    var clear = a.when === 'below' ? v >= t + margin : v <= t - margin;
    var now_ = was;
    if (a.on === false) now_ = 'ok';
    else if (was === 'ok' && hit) {
      now_ = 'alert';
      if (a.emails.length) events.push({ type: 'alert', to: a.emails.slice(), alert: a, temp: v, at: last.at });
    } else if (was === 'alert' && clear) {
      now_ = 'ok';
      // coming back from silence, the "reporting again" email already gives
      // the reading — a second "back to normal" one would just be noise
      if (cfg.sendClear !== false && !prev.stale && a.emails.length) events.push({ type: 'clear', to: a.emails.slice(), alert: a, temp: v, at: last.at });
    }
    state.rules[k] = now_;
  });
  return { state: state, events: events };
}

function ruleKey(a) { return a.when + ':' + Number(a.temp); }
function sensorKey(s) { return s.source + ':' + s.id; }
function validAlert_(a) { return a && (a.when === 'below' || a.when === 'above') && a.temp !== '' && a.temp != null && isFinite(Number(a.temp)); }
function recipients_(s) {
  var all = [];
  (s.alerts || []).forEach(function (a) { if (a.on !== false) (a.emails || []).forEach(function (m) { if (all.indexOf(m) < 0) all.push(m); }); });
  return all;
}

/* ── emails ───────────────────────────────────────────────────────────── */

// Pure: the subject and text of one email.
function message(sensor, ev, cfg, fmt) {
  var name = sensor.name || sensor.id;
  var f = function (v) { return v == null || !isFinite(v) ? '—' : (Math.round(v * 10) / 10) + '°F'; };
  var when = ev.at ? fmt(ev.at) : 'no reading yet';
  var a = ev.alert || {};
  var subject, lead;
  if (ev.type === 'alert' && a.when === 'below') { subject = '🥶 ' + name + ' is ' + f(ev.temp) + ' (at or below ' + f(a.temp) + ')'; lead = name + ' has dropped to ' + f(ev.temp) + '.'; }
  else if (ev.type === 'alert') { subject = '🔥 ' + name + ' is ' + f(ev.temp) + ' (at or above ' + f(a.temp) + ')'; lead = name + ' has reached ' + f(ev.temp) + '.'; }
  else if (ev.type === 'clear') { subject = '✅ ' + name + ' is back to ' + f(ev.temp); lead = name + ' is back to ' + f(ev.temp) + ' — past the ' + f(a.temp) + ' alert by the margin.'; }
  else if (ev.type === 'stale') { subject = '⚠️ ' + name + ' has stopped reporting'; lead = 'No new reading from ' + name + ' for over ' + (Number(cfg.staleMinutes) || 120) + ' minutes. Its alerts cannot fire until it reports again — check it.'; }
  else if (ev.type === 'back') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = name + ' is reporting again.'; }
  else { subject = 'Test alert'; lead = 'This is a test.'; }
  var lines = [lead, '', 'Reading: ' + f(ev.temp) + ' at ' + when, 'Sensor: ' + name + ' (' + (SOURCES[sensor.source] || sensor.source) + ' ' + sensor.id + ')'];
  if (ev.alert) lines.push('Alert: ' + (a.when === 'below' ? 'at or below ' : 'at or above ') + f(a.temp));
  if (cfg.appUrl) lines.push('', 'Live readings: ' + cfg.appUrl);
  lines.push('', '— Temp Alert' + (cfg.title ? ' · ' + cfg.title : ''));
  return { subject: SUBJECT_TAG + ' ' + subject, body: lines.join('\n') };
}

function deliver_(ss, cfg, sensor, ev, tz) {
  var fmt = function (ms) { return Utilities.formatDate(new Date(ms), tz, 'EEE MMM d, h:mm a'); };
  var m = message(sensor, ev, cfg, fmt);
  var what = { alert: 'ALERT', clear: 'Back to normal', stale: 'Not reporting', back: 'Reporting again' }[ev.type] || ev.type;
  var note = '';
  try {
    if (MailApp.getRemainingDailyQuota() < ev.to.length) throw new Error('Google’s daily email limit is used up — not sent');
    MailApp.sendEmail({ to: ev.to.join(','), subject: m.subject, body: m.body, name: 'Temp Alert' });
  } catch (err) { note = ' — NOT SENT: ' + String((err && err.message) || err); }
  log_(ss, [new Date(), sensor.name || sensor.id, what + note, num_(ev.temp), ev.at ? new Date(ev.at) : '',
    ev.alert ? (ev.alert.when === 'below' ? '≤ ' : '≥ ') + ev.alert.temp : '', ev.to.join(', ')]);
  return { type: ev.type, to: ev.to, subject: m.subject, sent: !note };
}

function sendTest_(ss, to) {
  var cfg = readConfig_(ss);
  var list = [];
  if (to && to.length) list = cleanEmails(to);
  else cfg.sensors.forEach(function (s) { recipients_(s).forEach(function (m) { if (list.indexOf(m) < 0) list.push(m); }); });
  if (!list.length) return { ok: false, error: 'No email addresses yet — add people to an alert first.' };
  if (MailApp.getRemainingDailyQuota() < list.length) return { ok: false, error: 'Google’s daily email limit is used up — try tomorrow.' };
  var body = [
    'This is a TEST from Temp Alert' + (cfg.title ? ' (' + cfg.title + ')' : '') + '. Nothing is wrong.',
    '',
    'Real alerts look like this one: the subject starts with ' + SUBJECT_TAG + ', and they come from this same address.',
    'Did your phone buzz or ring for this email? If not, set it up now so a frost alert at 3 am wakes you —',
    'the steps are on the app’s Setup page, step 6' + (cfg.appUrl ? ': ' + cfg.appUrl.replace(/\/?(\?.*)?$/, '/setup') : '') + '.',
    '',
    'Sensors watched: ' + cfg.sensors.map(function (s) { return s.name || s.id; }).join(', '),
  ].join('\n');
  MailApp.sendEmail({ to: list.join(','), subject: SUBJECT_TAG + ' 🧪 Test alert — please check your phone rang', body: body, name: 'Temp Alert' });
  log_(ss, [new Date(), '(test)', 'Test email', '', '', '', list.join(', ')]);
  return { ok: true, sent: list, quota: mailQuota_() };
}

function mailQuota_() { try { return MailApp.getRemainingDailyQuota(); } catch (e) { return null; } }

/* ── reading the sensors ─────────────────────────────────────────────── */

// → { temp (°F), at (ms) } for the newest reading, or throws a readable error.
function readSensor_(s, token, tz, now) {
  if (s.source === 'licor') return readLicor_(s, token, now);
  if (s.source === 'newa') return readNewa_(s, tz, now);
  if (s.source === 'nws') return readNws_(s);
  throw new Error('Unknown source: ' + s.source);
}

// LI-COR Cloud. The id is "loggerSerial|sensorSerial". The query is BlightCast's,
// the form verified live against LI-COR (08-10): deviceSerialNumber +
// sensorSerialNumber + startTime/endTime in ms. (loggers= / sensors= /
// start_date_time= is answered 400 — found on the first real test, 10-01.)
function readLicor_(s, token, now) {
  if (!token) throw new Error('No LI-COR token saved');
  var parts = String(s.id).split('|');
  var q = 'deviceSerialNumber=' + encodeURIComponent(parts[0]) + '&sensorSerialNumber=' + encodeURIComponent(parts[1] || '') +
    '&startTime=' + Math.floor(now - 3 * 3600000) + '&endTime=' + Math.floor(now);
  var r = fetch_('https://api.licor.cloud/v2/data?' + q, { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) throw new Error('LI-COR refused the token');
  if (r.code !== 200) throw new Error('LI-COR answered ' + r.code + why_(r.text));
  return licorLatest(JSON.parse(r.text), parts[1] || '');
}
// Pure: /v2/data reply → the newest temperature of one sensor, in °F.
function licorLatest(reply, serial) {
  var best = null;
  var base = String(serial).split('-')[0];
  ((reply && reply.sensors) || []).forEach(function (sn) {
    var full = String(sn.sensorSerialNumber || '');
    if (full !== serial && full.split('-')[0] !== base) return;
    (sn.data || []).forEach(function (m) {
      if (!/^temperature$/i.test(String(m.measurementType || ''))) return;
      var isC = /c/i.test(m.units || '') && !/f/i.test(m.units || '');
      (m.records || []).forEach(function (rec) {
        if (!rec || rec[1] == null || !isFinite(Number(rec[1]))) return;
        var t = Number(rec[0]);
        if (!best || t > best.at) best = { at: t, temp: isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]) };
      });
    });
  });
  if (!best) throw new Error('No temperature from this LI-COR sensor in the last 3 hours');
  return best;
}

// Every temperature sensor on the LI-COR account, for the app's picker.
function licorAction_(body) {
  if (body.clear) { delProp_('LICOR_TOKEN'); return { ok: true, hasLicor: false, sensors: [] }; }
  var token = String(body.token || '').trim() || getProp_('LICOR_TOKEN');
  if (!token) return { ok: false, error: 'Paste your LI-COR Cloud token first.' };
  var r = fetch_('https://api.licor.cloud/v2/devices', { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) return { ok: false, error: 'LI-COR refused that token — copy it again from LI-COR Cloud (Account → API tokens).' };
  if (r.code !== 200) return { ok: false, error: 'LI-COR answered ' + r.code + ' — try again in a minute.' };
  var sensors = licorSensors(JSON.parse(r.text));
  if (String(body.token || '').trim()) setProp_('LICOR_TOKEN', token);   // only a token that worked is kept
  return { ok: true, hasLicor: true, sensors: sensors };
}
// Pure: /v2/devices → [{ id: "logger|sensor", logger, loggerName, serial, units }]
function licorSensors(reply) {
  var out = [];
  ((reply && reply.devices) || []).forEach(function (d) {
    (d.sensors || []).forEach(function (sn) {
      var full = String(sn.sensorSerialNumber || '');
      if (!full || !/^temperature$/i.test(String(sn.measurementType || ''))) return;
      out.push({ id: String(d.deviceSerialNumber) + '|' + full, logger: String(d.deviceSerialNumber || ''),
        loggerName: String(d.deviceName || ''), serial: full, label: String(sn.label || sn.name || ''), units: String(sn.units || '') });
    });
  });
  return out;
}

// NEWA (Cornell). The id is the station id with its network, e.g. "ude njwx".
// stnHrly wants the station's clock: from yesterday 00 to the current hour —
// an hour in its future is refused, so on a 400 it asks again an hour earlier.
function readNewa_(s, tz, now) {
  for (var back = 0; back < 2; back++) {
    var end = new Date(now - back * 3600000);
    var payload = { sid: String(s.id), sdate: Utilities.formatDate(new Date(now - 86400000), tz, 'yyyyMMdd') + '00', edate: Utilities.formatDate(end, tz, 'yyyyMMddHH') };
    var r = fetch_('https://hrly.nrcc.cornell.edu/stnHrly', { method: 'post', contentType: 'application/json', payload: JSON.stringify(payload) });
    if (r.code === 400 && back === 0) continue;
    if (r.code !== 200) throw new Error('NEWA answered ' + r.code);
    return newaLatest(JSON.parse(r.text), tzOffsetMin_(tz, now));
  }
  throw new Error('NEWA refused the time window');
}
// Pure: stnHrly reply → the newest temperature (°F). Its hours are the
// station's local clock; offsetMin turns them into real time.
function newaLatest(reply, offsetMin) {
  var rows = (reply && (reply.hrlyData || reply.data)) || [];
  var f = (reply && (reply.hrlyFields || reply.fields)) || ['date', 'flags', 'prcp', 'temp'];
  var iTemp = f.indexOf('temp');
  var best = null;
  rows.forEach(function (row) {
    if (!row || iTemp < 0) return;
    var v = String(row[iTemp] == null ? '' : row[iTemp]).trim();
    if (!v || !isFinite(Number(v)) || /^(m|nan|na|null|-)$/i.test(v)) return;
    var d = String(row[0]), m = d.match(/^(\d{4})-?(\d{2})-?(\d{2})[T ]?(\d{2})/);
    if (!m) return;
    var at = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4]) - (offsetMin || 0) * 60000;
    if (!best || at > best.at) best = { at: at, temp: Number(v) };
  });
  if (!best) throw new Error('No temperature from this NEWA station in the last day');
  return best;
}

// National Weather Service (api.weather.gov). The id is the station, e.g. "KMIV".
function readNws_(s) {
  var r = fetch_('https://api.weather.gov/stations/' + encodeURIComponent(s.id) + '/observations?limit=6',
    { headers: { Accept: 'application/geo+json', 'User-Agent': 'TempAlert (nursery temperature alerts)' } });
  if (r.code !== 200) throw new Error('Weather Service answered ' + r.code);
  return nwsLatest(JSON.parse(r.text));
}
// Pure: /observations → the newest reading that HAS a temperature (°F).
// The newest observation often has none yet, so it looks back a few.
function nwsLatest(reply) {
  var best = null;
  ((reply && reply.features) || []).forEach(function (ft) {
    var p = ft && ft.properties;
    if (!p || !p.timestamp || !p.temperature || p.temperature.value == null) return;
    var at = new Date(p.timestamp).getTime();
    if (!isFinite(at)) return;
    var c = Number(p.temperature.value);
    var t = /degF/.test(p.temperature.unitCode || '') ? c : c * 9 / 5 + 32;
    if (!best || at > best.at) best = { at: at, temp: t };
  });
  if (!best) throw new Error('No temperature from this Weather Service station lately');
  return best;
}

function fetch_(url, opt) {
  var o = { muteHttpExceptions: true, followRedirects: true };
  for (var k in opt) o[k] = opt[k];
  var r = UrlFetchApp.fetch(url, o);
  return { code: r.getResponseCode(), text: r.getContentText() };
}

/* ── the Alerts and Settings tabs ─────────────────────────────────────── */

function readConfig_(ss) {
  var cfg = settingsFromValues(valuesOf_(ss, SETTINGS_TAB, 2));
  cfg.sensors = alertsFromValues(valuesOf_(ss, ALERTS, ALERT_HEADERS.length));
  return cfg;
}
function writeConfig_(ss, cfg) {
  var a = alertsToValues(cfg.sensors || []);
  var sh = ensureSheet_(ss, ALERTS);
  sh.clear();
  sh.getRange(1, 1, a.length, ALERT_HEADERS.length).setValues(a);
  sh.setFrozenRows(1);
  var s = settingsToValues(cfg);
  var st = ensureSheet_(ss, SETTINGS_TAB);
  st.clear();
  st.getRange(1, 1, s.length, 2).setValues(s);
  st.setFrozenRows(1);
}
function valuesOf_(ss, name, width) {
  var sh = ss.getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(1, 1, sh.getLastRow(), width).getValues();
}

// Pure: the Alerts tab → sensors, each with its alerts. One row = one alert;
// rows with the same Source + ID are one sensor. A row with no "Alert when"
// is a sensor being watched with no alert yet.
function alertsFromValues(values) {
  var out = [], ix = {};
  var col = function (row, i) { return String(row[i] == null ? '' : row[i]).trim(); };
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var source = SOURCE_FROM_LABEL[col(row, 1).toLowerCase()] || col(row, 1).toLowerCase();
    var id = col(row, 2);
    if (!id || !SOURCES[source]) continue;
    var key = source + ':' + id;
    if (!(key in ix)) { ix[key] = out.length; out.push({ name: col(row, 0) || id, source: source, id: id, alerts: [] }); }
    var s = out[ix[key]];
    var when = col(row, 3).toLowerCase();
    when = /below|under|≤|<|cold|frost/.test(when) ? 'below' : (/above|over|≥|>|hot|heat/.test(when) ? 'above' : '');
    var temp = col(row, 4);
    if (!when || temp === '' || !isFinite(Number(temp))) continue;
    s.alerts.push({ when: when, temp: Number(temp), emails: cleanEmails(col(row, 5)), on: !/^(no|false|off|0)$/i.test(col(row, 6)) });
  }
  return out;
}

// Pure: sensors → the Alerts tab (header row first).
function alertsToValues(sensors) {
  var out = [ALERT_HEADERS.slice()];
  (sensors || []).forEach(function (s) {
    if (!s || !s.id || !SOURCES[s.source]) return;
    var base = [safe_(s.name || s.id), SOURCES[s.source], safe_(String(s.id))];
    var alerts = (s.alerts || []).filter(validAlert_);
    if (!alerts.length) out.push(base.concat(['', '', '', '']));
    alerts.forEach(function (a) {
      out.push(base.concat([a.when === 'below' ? 'At or below' : 'At or above', Number(a.temp),
        safe_(cleanEmails(a.emails).join(', ')), a.on === false ? 'No' : 'Yes']));
    });
  });
  return out;
}

function settingsFromValues(values) {
  var cfg = {};
  SETTINGS.forEach(function (s) { cfg[s[0]] = s[2]; });
  for (var r = 1; r < values.length; r++) {
    var label = String(values[r][0] == null ? '' : values[r][0]).trim().toLowerCase(), v = values[r][1];
    SETTINGS.forEach(function (s) {
      if (label !== s[1].toLowerCase()) return;
      if (typeof s[2] === 'number') { var n = Number(v); if (v !== '' && isFinite(n)) cfg[s[0]] = n; }
      else if (typeof s[2] === 'boolean') cfg[s[0]] = !/^(no|false|off|0)$/i.test(String(v).trim());
      else cfg[s[0]] = String(v == null ? '' : v).trim();
    });
  }
  return cfg;
}
function settingsToValues(cfg) {
  var out = [['Setting', 'Value']];
  SETTINGS.forEach(function (s) {
    var v = cfg[s[0]] == null ? s[2] : cfg[s[0]];
    if (typeof s[2] === 'boolean') v = v === false ? 'No' : 'Yes';
    else if (typeof s[2] === 'number') v = isFinite(Number(v)) ? Number(v) : s[2];
    else v = safe_(v);
    out.push([s[1], v]);
  });
  return out;
}

// Pure: "a@x.com, b@y.org; c@z" (or a list) → the valid addresses, once each.
function cleanEmails(v) {
  var parts = Array.isArray(v) ? v : String(v || '').split(/[\s,;]+/);
  var out = [];
  parts.forEach(function (p) {
    var m = String(p || '').trim().toLowerCase();
    if (/^[^\s@<>()]+@[^\s@<>()]+\.[a-z]{2,}$/.test(m) && out.indexOf(m) < 0) out.push(m);
  });
  return out;
}

// Readings + alert states for the app (no addresses — counts only).
function statusOf_(cfg, state) {
  return cfg.sensors.map(function (s) {
    var st = state[sensorKey(s)] || {};
    return {
      key: sensorKey(s), name: s.name, source: s.source, id: s.id,
      temp: st.temp == null ? null : Math.round(st.temp * 10) / 10, at: st.at || null, checked: st.checked || null,
      stale: !!st.stale, error: st.error || '',
      alerts: (s.alerts || []).map(function (a) {
        return { when: a.when, temp: a.temp, on: a.on !== false, people: a.emails.length, state: (st.rules || {})[ruleKey(a)] || 'ok' };
      }),
    };
  });
}

/* ── the 15-minute trigger ───────────────────────────────────────────── */

function isChecking_() {
  return ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'checkAll'; });
}
function setChecking_(on) {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'checkAll') ScriptApp.deleteTrigger(t); });
  if (on) ScriptApp.newTrigger('checkAll').timeBased().everyMinutes(CHECK_EVERY_MIN).create();
}

/* ── small helpers ────────────────────────────────────────────────────── */

function log_(ss, row) {
  var sh = ensureSheet_(ss, LOG, LOG_HEADERS);
  sh.getRange(sh.getLastRow() + 1, 1, 1, LOG_HEADERS.length).setValues([row.map(function (v) { return typeof v === 'string' ? safe_(v) : v; })]);
}
function ensureSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) { sheet.getRange(1, 1, 1, headers.length).setValues([headers]); sheet.setFrozenRows(1); }
  }
  return sheet;
}
function readState_() { try { return JSON.parse(getProp_('STATE') || '{}') || {}; } catch (e) { return {}; } }
function tz_(ss) { return (ss.getSpreadsheetTimeZone && ss.getSpreadsheetTimeZone()) || Session.getScriptTimeZone() || 'America/New_York'; }
// minutes east of UTC on that clock, e.g. -240 for EDT
function tzOffsetMin_(tz, now) {
  var z = Utilities.formatDate(new Date(now), tz, 'Z');
  var m = String(z).match(/^([+-])(\d{2})(\d{2})$/);
  return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) : 0;
}
// the service's own words on an error, briefly — so a failure says WHY
function why_(text) { var s = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 160); return s ? ': ' + s : ''; }
function checkKey_(key) {
  key = String(key || '');
  if (key.length < 4) return { ok: false, error: 'The setup password needs at least 4 characters.' };
  var stored = getKey_();
  if (stored && stored !== key) return { ok: false, error: 'That is not the setup password for this sheet.' };
  return { ok: true, first: !stored };
}
// Anything typed that starts like a formula is written as text, never run.
function safe_(v) {
  var s = v == null ? '' : String(v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
function num_(v) { var n = Number(v); return (v === '' || v == null || isNaN(n)) ? '' : Math.round(n * 10) / 10; }
function getProp_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function setProp_(k, v) { PropertiesService.getScriptProperties().setProperty(k, v); }
function delProp_(k) { PropertiesService.getScriptProperties().deleteProperty(k); }
function getKey_() { return getProp_('SETUP_KEY') || ''; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

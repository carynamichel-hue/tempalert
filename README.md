# Temp Alert

**Frost and heat email alerts from your own temperature sensors — or from a
nearby weather station.** Pick LI-COR sensors (with your LI-COR Cloud token)
or a NEWA / National Weather Service station, give each one its own alerts
("at or below 32 °F → email these people"), and a small script in your own
Google Sheet checks every 15 minutes and emails when a reading crosses the
line, when it is back to normal, and when a sensor stops reporting.

**Live: https://carynamichel-hue.github.io/tempalert/**. Setup walks through
everything, including how to make your phone actually ring for an alert at
3 am. "See an example (demo)" shows it before you set anything up.

No accounts and no server of ours: the checking and the emails run in your
own Google Sheet's Apps Script ([`apps-script/Code.gs`](apps-script/Code.gs) —
read it before you paste it). Your LI-COR token stays inside that script;
email addresses are only visible with your setup password.

This repository holds the **built site**. How it was built — the requests, in
the words they were asked — is in [`prompts/`](prompts/).

Built at Overdevest Nurseries.

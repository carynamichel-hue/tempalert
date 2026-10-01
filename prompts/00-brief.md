# 00 — The brief

> "the last possible additional example we discussed building was a frost or
> high temp alert tool, if we did that what type of alert would we be able to
> create?"

The first answer was the important one: **a web page can only show you
things while it is open — it cannot wake your phone at 3 am.** Real alerts
need something that runs on a schedule. The simplest one a nursery already
has is Google: a small Apps Script in its own Google Sheet, set to run every
15 minutes. (The same pattern as the Scout Report example.)

> "the alerts would be google emails?"

Yes — ordinary emails from the Google account that owns the sheet, to any
address. Easy to sleep through, so the tool has to teach people how to make
their phone ring for them.

> "okay lets make the tool and include instructions for turning on the alerts
> for the email so people get notified, we should include the ability for
> someone to pick a weather station or use their licor token and if they have
> more than one temperature sensor they should be able to set alerts
> independently for each one, temp threshold and people to notify"

## What that became
- Sources: a NEWA station or a Weather Service station picked by town, or
  every temperature sensor on a LI-COR Cloud account (the token stays inside
  the sheet's script).
- Each sensor: its own alerts — at or below / at or above a temperature, and
  its own list of people.
- One email when a reading crosses the line, one when it is back to normal
  (past a 2 °F margin, so a reading hovering at the line does not send twenty),
  and one if a sensor stops reporting — a dead sensor must never look like a
  quiet night.
- Setup step 6 and the guide: the Gmail filter, phone notification settings
  and night-mode exceptions, then a test alert to prove it rings.

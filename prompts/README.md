# How Temp Alert was built

These are the requests that produced this tool, in order — what was asked,
in the words it was asked. Start with `00-brief.md`.

The tool is a phone app (this repository, on GitHub Pages) plus a small
Google Apps Script the nursery pastes into its own Google Sheet
(`apps-script/Code.gs`). The script is the part that runs every 15 minutes
and sends the emails; the app is how you set it up and see the readings.

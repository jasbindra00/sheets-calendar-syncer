<h1>Google Sheets Timetable to Google Calendar Syncer</h1>
<h3>Seamlessly sync between your Sheets timetable and Calendar day configuration</h3>
<p>The verbosity and flexibilty of sheets, combined with the accessibility and push notifications from calendars. This makes for a very effective time management and tracking tool.</p>
<br/>

<h2>Instructions</h2>
<ul>
<li>Head over to Google Sheets.</li>
<li>On the top, click Extensions, then Apps Script.</li>
<li>On the left hand side, click the Editor icon.</li>
<li>Click the plus button and add a "Script" file. Copy and paste the contents of each .gs file in this repository to its own separate Script file.</li>
<li>ENSURE THAT THE NAME OF THE FILES IN THE REPO MATCH THE NAME OF THE SCRIPT FILES ON GOOGLES SIDE! </li>
<li>Done!</li>
</ul>

<h2>Requirements</h2>
<h3>Unless you'd like to tweak the code, here are some requirements / assumptions about the configuration of your sheet, for the script files.</h3>
<ul>
<li>The name of each sheet must be in the format of ddmmyy. This is to be able to write the timetable events from the sheets to the correct day on calendars.</li>
<li>The top (first) row of your timetable must be: Time Start - Time End - Duration - Event Name</li>
</ul>

<h2>Execution</h2>
<ul>
<li>Simply head over to your timetable sheet. At the top, click Custom Menu, and then Sync.</li>
<li>Note that in choosing to delete the events for the day from the menu, this will NOT delete your non-script-generated events. Look at the code for how this is possible.</li>

</ul>

<h2>Notes</h2>
<ul>
<li>I have added an example sheet / timetable which is compatible with the codebase below.</li>
<a href="https://docs.google.com/spreadsheets/d/1zGrdwm8Usu27pLWSro1VNEf0JponSm_BtvGAEZcUX4g/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1zGrdwm8Usu27pLWSro1VNEf0JponSm_BtvGAEZcUX4g/edit?usp=sharing</a>

</ul>

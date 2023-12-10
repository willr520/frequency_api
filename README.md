<h1>Frequency Generator API</h1>
This API built with Node.js and Express generates frequencies that can then be used along with the OscillatorNode Web API. It has two functions: you can input a string that is then generated into a
list of frequencies and you can also input a note (Ex. C2, F#5) which then returns the frequency of that note. 
<br></br>
<b>Link: </b> https://frequency-generator.onrender.com
<h2>Endpoints</h2>

<h3>1. Check Server Status</h3>
Return the status of the server
<ul>
  <li><b>Endpoint: </b> '/status'</li>
  <li><b>Method: </b> GET</li>
  <li><b>Example: </b> curl -X GET "https://frequency-generator.onrender.com/status"</li>
</ul>

<h3>2. Generate Sound Data</h3>
Returns an array of frequencies based on the InputString
<ul>
  <li><b>Endpoint: </b> '/randomSound'</li>
  <li><b>Parameters: </b> inputString (string you want to generate into frequencies)
  <li><b>Method: </b> GET</li>
  <li><b>Example: </b> curl -X GET "https://frequency-generator.onrender.com/randomSound?inputString=Nathan"</li>
</ul>

<h3>3. Generate Note Frequency</h3>
Returns the frequency of any note (Ex. C2, F#5)
<ul>
  <li><b>Endpoint: </b> '/note-frequency'</li>
   <li><b>Parameters: </b> inputNote (note that you want to get frequency of)
  <li><b>Method: </b> GET</li>
  <li><b>Example: </b> curl -X GET "https://frequency-generator.onrender.com/note-frequency?inputNote=C4"</li>
</ul>

<h2>Author</h2>
Nathan Williams

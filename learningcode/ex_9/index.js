const express = require('express');

const app = express();


app.get('/', function(request, response) {
  response.send('Congrats you\'re using your first Node.js and Express as Web Server');
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('This HTTP server is running on port %port%');
});
elseconsole.log('Unable to start the server on port %port%');

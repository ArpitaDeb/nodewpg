const express = require('express');
const app = express();
const path = require('path');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
  
   app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
  });
  app.use('/assets', express.static('public'));
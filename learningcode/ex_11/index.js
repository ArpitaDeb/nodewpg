const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/product', function(reqest, response) {
    response.sendFile(path.join(__dirname, 'product.html'));
});

    
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
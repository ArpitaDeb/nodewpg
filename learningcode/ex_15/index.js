const express = require('express');
const app = express();
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
    app.get('/', function(request, response) {
    response.status(200).json({ "message": "Este request/response está OK"});
  });  
  const requestTime = function(request, response, next) {
    const message = `Request: ${request.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
  }
  
  app.use(requestTime);
  
  app.get('/', (request, response) => {
    const responseMessage = request.requestTime;
    response.send(responseMessage);
  });


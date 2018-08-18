const express = require('express');

const port = 3000
const http = require('http')

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Congrats you\'re using your first Node.js and Express as Web Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('Unable to start the server on port %port%', err)
  }
 app.listen(3000, function() {
  console.log(`This HTTP server is running on port %port%${port}`)
});
}
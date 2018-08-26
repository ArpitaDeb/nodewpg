const http = require('http')  
const port = 3001

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Congrats you are using your first Node.js Web Server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log(`Unable to start the server on port $(port}`);
  }

  console.log(`server is listening on port ${port}`);
})
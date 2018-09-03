// content of index.js
const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
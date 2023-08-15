// https://github.com/motdotla/dotenv
require('dotenv').config()
const http = require('http');
const port = process.env.PORT || 6060
const hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Batch 41\nTime for a break");
});

server.listen(port, ()=>{console.log(`Server running at http://${hostname}:${port}/`);});
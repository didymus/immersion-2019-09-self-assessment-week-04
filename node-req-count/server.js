const url = require('url');
const http = require('http');

const globalCounter = {};

const server = http.createServer((request, response) => {
  const endpoint = url.parse(request.url, true).pathname;
  const property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;

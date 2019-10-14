const url = require('url');
const http = require('http');

const globalCounter = {};

const server = http.createServer((request, response) => {
  const endpoint = url.parse(request.url, true).pathname;
  const property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // * A POST request to a route should increment that 
    // endpoint's count on `globalCounter`.
    if(globalCounter[property]){
      globalCounter[property]++;
      response.end();
    }
    
  } else if (request.method === 'GET') {
    // * A GET request to a route should return the value 
    // stored at that endpoint's property on `globalCounter`.
    // * A GET request to an undefined route should return an 
    // empty response.
    if(globalCounter[property]){
      response.writeHead(200, null);
      response.end(JSON.stringify(globalCounter[property]))
    }
  } else {
    //response.statusCode = 404;
    response.writeHead(404, null);
    response.end();
  }
});

// Do not edit this line -ok
module.exports = server;

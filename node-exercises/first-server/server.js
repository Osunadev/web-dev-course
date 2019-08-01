// We grab the built-in Node http module
const http = require('http');

const server = http.createServer((request, response) => {
  // console.log('headers', request.headers);
  console.log('method', request.method);
  console.log('url', request.url);

  const user = {
    name: 'John',
    hobby: 'Skating'
  };

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
});

// The port that we are listen to
server.listen(3000);

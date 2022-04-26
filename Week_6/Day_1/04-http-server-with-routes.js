const http = require('http');

const port = 8080; //5001, 5010

const getHome = () => {
  // 200 code is OK
  res.writeHead(200, {'Content-Type': 'text/html'});
  // end is last thing that runs - writes all at once
  res.end(`
    <!DOCTYPE html>
      <html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>Home</h1>
          <p>
          Welcome to the homepage!
          </p>
        </body>
      </html>
  `);
};
// parameters are request & response
const server = http.createServer((req, res) => {
  console.log(Date(), 'Request Received:', '\n', req.method, req.url);

  // switch(){};
  const route = `${req.method} ${req.url}`;
  
  if(route === 'GET /') {
    getHome(req, res);
  }
});

server.listen(port, () => {
  console.log('HTTP server is now listening on port:', port);
});
const net = require('net');

const port = 3000;

const server = net.createServer();

server.on('connection', () => {
  console.log('A client has connected');
});

// .listen is  method, takes port and a cb fn
server.listen(port, () => {
  console.log(
    'Server is listening on port:'
    + port
  );
;});
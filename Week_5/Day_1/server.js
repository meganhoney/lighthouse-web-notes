const net = require('net');

const port = 3000;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
  // console.log('A client has connected');

  connection.setEncoding('utf-8');

  connections.push(connection);

  // listen for data writes from clients
  connection.on('data', (data) => {
    console.log('A client submitted: ' + data);

    if (data.startsWith('name: ')) {
      data = data + ' ';
      const name = data.split(' ')[1];
      console.log(name);
      return connection.username = name;
    }

    for (const conn of connections) {
      if (conn !== connection && !conn._writableState.finished) {
        const name = typeof connection.username !== 'undefined' ? connection.username.trim() : 'Client';
        conn.write(
          name
          + ' says: '
          + data.trim())
      }
    }
  });
 
});

// .listen is  method, takes port and a cb fn
server.listen(port, () => {
  console.log(
    'Server is listening on port:'
    + port
  );
;});
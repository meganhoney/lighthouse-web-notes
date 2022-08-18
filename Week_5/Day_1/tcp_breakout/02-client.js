const net = require('net');

// use net module to create connection
const client = net.createConnection({
  host: 'localhost',
  port: 3000
});

client.setEncoding('utf-8');

// data event - server is receiving data
// client.write('Hello, I am a client!');

process.stdin.on('data', (data) => {
  const enteredString = String(data).trim();
  // Print to client
  console.log('You entered: ', String(data));
  // Print to server
  client.write(enteredString);
});

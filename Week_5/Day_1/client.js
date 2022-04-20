const net = require('net');

// 
const config = {
  //host: '8.tcp.ngrok.io',
  //port: 14589
  host: 'localhost',
  port: 3000
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

// Read data from server
client.on('data', (data) => {
  console.log(data);
});

// submitting information to server
process.stdin.on('data', (data) => {
  client.write(data);
});
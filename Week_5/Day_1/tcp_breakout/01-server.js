const net = require('net');
const PORT = 3000;

// creates server object using net module
const server = net.createServer();

// tell server object to listen, pass in port and callback
server.listen(PORT, () => {
  console.log('Server is listening at: ', server.address());
})

// .on implies an event - followed by string indicating type of event
server.on('connection', (connection) => {
  console.log('A new client has connected.');

  connection.setEncoding('utf-8');

  // per connection, we will listen for data
  // pass in callback - what do we do when we receive data?
  connection.on('data', (data) => {
    console.log(data);
  });

  connection.on('error', (error) => {
    // console.log(error);

    // handle unexpected connection loss
    if (error.code == 'ECONNRESET') console.log('A client has ended their session')
    else console.log(error);
  });

  connection.on('end', () => {
    console.log('A client has ended their session.');
  })
})


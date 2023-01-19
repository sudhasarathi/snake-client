
const net = require('net');
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SUD');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
module.exports = { connect };

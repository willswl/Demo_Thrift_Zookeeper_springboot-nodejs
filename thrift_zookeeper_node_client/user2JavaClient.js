var thrift = require('thrift');
var users = require('./gen-nodejs/UserService');
var ttypes = require('./gen-nodejs/UserService_types');

var thriftclientJava = {};

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 7911, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  console.log(err);
});

// Create a Calculator client with the connection
thriftclientJava.client = function(){
  return thrift.createClient(users, connection);
} 

module.exports = thriftclientJava;


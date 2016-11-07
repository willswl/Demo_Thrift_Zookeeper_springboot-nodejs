var thrift = require("thrift");
var users = require('./gen-nodejs/UserService');
var ttypes = require('./gen-nodejs/UserService_types');

var data = {};

var server = thrift.createServer(users, {
  getUser: function(result) {
    console.log("getuser()");
    result(null,'wills from nodejs server');
  }

});

server.listen(7912);
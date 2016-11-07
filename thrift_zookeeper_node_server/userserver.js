var thrift = require("thrift");
var users = require('./gen-nodejs/UserService');
var ttypes = require('./gen-nodejs/UserService_types');

var data = {};

console.log("server");
var server = thrift.createServer(users, {
  getUser: function(result) {
    user = new ttypes.UserDto();
    user.username = 'wills from nodejs server'
    console.log("getuser()");
    result(null,user);
  }

});

server.listen(7912);
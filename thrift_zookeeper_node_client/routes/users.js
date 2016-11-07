var express = require('express');
var router = express.Router();

var thriftclientJava = require('../user2JavaClient');
var thriftclientNode = require('../user2NodeClient');

/* GET users listing. */
router.get('/java', function (req, res, next) {
  var clientjava = thriftclientJava.client();

  clientjava.getUser(function (err, response) {
    console.log("getUser result from java server: " + response.username);
    res.send("getUser result from java server: " + response.username);
  });

});

/* GET users listing. */
router.get('/node', function (req, res, next) {
  var clientNode = thriftclientNode.client();
  console.log("clientNode: " + clientNode);
  clientNode.getUser(function (err, userDto) {
    if(err){
        console.log("error hit from calling node server");
        res.send("error hit from calling node server");
    } else{
        console.log("getUser result from Node server: " + userDto.username);
        res.send("getUser result from Node server: " + userDto.username);
    }
    
  });

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Main Page');
});

module.exports = router;

/*
var fs = require('fs');

fs.readFile('/home/pi/WiringPi/myTest/ValueTest.txt', function(err, data) {
    console.log('22');
    if(err) throw err;
    var array = data.toString().split("\n");
    
      for(i in array) {
          console.log(array[i]);
      }
    
});
*/

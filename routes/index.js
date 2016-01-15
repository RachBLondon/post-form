var express = require('express');
var router  = express.Router();
var fs      = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postForm',function (req, res){
  var formData = JSON.stringify(req.body);
  writeToDisk(formData);
});



var writeToDisk = function(data){
  fs.writeFile(__dirname+'/../models/dataStore.json', data, function (err) {
    if (err) return console.log(err);
    console.log('formData > dataStore.txt');
  });
};

module.exports = router

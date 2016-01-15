var express = require('express');
var router  = express.Router();
var fs      = require("fs");
var dataJSON = require(__dirname +"/../models/dataStore");
var count = 0;

console.log("dataJSON....", dataJSON);


var dataObject = new Object();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postForm',function (req, res){

  var formData = req.body;
  dataObject["person"+ count] = formData;
  console.log("????",formData);
  console.log("LLL",dataObject);
  count ++;
  console.log(count);


  writeToDisk(JSON.stringify(dataObject));
});



var writeToDisk = function(data){
  fs.writeFile(__dirname+'/../models/dataStore.json', data, function (err) {
    if (err) return console.log(err);
    console.log('formData > dataStore.txt');
  });
};

module.exports = router

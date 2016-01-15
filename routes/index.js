var express = require('express');
var router  = express.Router();
var fs      = require("fs");
var dataJSON = require(__dirname +"/../models/dataStore");
var count = 4;

console.log("dataJSON....", dataJSON);


var dataObject = new Object();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form' });
});

router.post('/postForm',function (req, res){
  writeToDisk(JSON.stringify(createNamePairObjects(getFromData(req,res))));
});

var getFromData = function (req, res){
  var formData = req.body;
  return formData;
}

var createNamePairObjects = function(formData){
    var firstNames = formData.firstname;
    var surnames = formData.surname;
    console.log(firstNames);
    console.log(surnames);

    firstNames.map(function(firstname, i){
        var person ={};
        person.firstname = firstname;
        person.surname = surnames[i];
        dataObject["person"+count] = person;
        count ++;
    });
    return dataObject;
};

var writeToDisk = function(data){
  fs.writeFile(__dirname+'/../models/dataStore.json', data, function (err) {
    if (err) return console.log(err);
    console.log('formData > dataStore.txt');
  });
};

module.exports = router;

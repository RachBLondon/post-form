var querystring = require('querystring');
var util = require('util');
var fs = require('fs');
var form = fs.readFileSync('form.html');
var maxData =  2 * 1024 + 1024; // restricts POST request size to prevent against Denail of Service Attack, limit set here to 2mb

module.exports = function(request, response){
  if(request.method === "POST"){
    var postData = '';
  request.on('data', function(chunk){
    postData += chunk;

    if (postData.length > maxData){
      postData = "";
      this.pause();
      response.writeHead(413);
      response.end('Too large');
    }
  }).on('end', function(){

    if(!postData) { response.end(); return;} //prevents empty post requests from crashing server

    var postDataObject = querystring.parse(postData);
    var postDataObjectJson = JSON.stringify(postDataObject);

    fs.writeFile(__dirname+'/../models/dataStore.json', postDataObjectJson, function (err) {
      if (err) return console.log(err);
      console.log('postData > dataStore.txt');
      })
    response.end('You Posted:\n' + util.inspect(postDataObject));
  });
}


  if (request.method === "GET") {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(form);
  }
}

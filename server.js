var http = require('http');
var formBackend = require(__dirname + "/controllers/formBackend.js");
var port = 3000

var app = function(request, response) {
  formBackend(request, response);
};

http.createServer(app).listen(port);
console.log('server listening on port', port);

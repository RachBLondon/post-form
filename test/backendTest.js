var shot = require("shot");
var test = require("tape");

var app = require("./../app.js");




testUrl("/", 200);
// testUrl("/style.css", 200);
testUrl("/postForm", 200);
testUrl("/duckquack", 404);


function testUrl(url, statusCode){
  test("check " + url + " is " + statusCode, function(t){
    var request = {
      method: "GET",
      url: url
    };

    shot.inject(app, request, function(res){
      var actual = res.statusCode;
      var expected = statusCode;
      t.equal(actual, expected, "test passed");
      t.end();
    });
  });
}


test('Data is being collected from the from and sent to models/dataStore.js', function(t){
  var dataFormFE = app.post.formData;
  console.log("test>>>>",dataFormFE);
  // var actual = app.SpecificTubeLine(body);
  // var expected = data.expected;
  t.Equal(actual, expected, 'test passed!');
  t.end();
});

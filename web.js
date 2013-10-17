var express = require("express");
var app = express();
app.use(express.logger());

//var port = 5678;
var port = process.env.PORT || 80;
console.log("port = " + port);

var i=0;

app.get('/', function(request, response) {
  i++;
  var res = 'wings server: port:' + port + ' access ' + i;
  //res += '<script>window.alert("wings client: access: ' + i + '")</script>';
  response.send(res);

	var mongo = require('mongodb');

	var mongoUri = process.env.MONGOLAB_URI ||
	  process.env.MONGOHQ_URL ||
	  'mongodb://localhost/mydb';

	mongo.Db.connect(mongoUri, function (err, db) {
	  db.collection('mydocs', function(er, collection) {
	    //i++;
	    var res = 'mongo: access ' + i;
	    console.log(res);
	    collection.insert({'k': i}, {safe: true}, function(er,rs) {
	    });
	  });
	});

});

app.listen(port, function() {
  console.log("Listening on " + port);
});


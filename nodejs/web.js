var express = require("express");
var app = express();
app.use(express.logger());

var port = process.env.PORT || 2345;
var port = 2345;
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

	this.db = mongo.Db.connect(mongoUri, function (err, db) {
	  if(!err)
	  db.collection('mydocs', function(er, collection) {
	    //i++;
	    var res = 'mongo: access ' + i;
	    console.log(res);
	    collection.insert({'k': i}, {safe: true}, function(er,rs) {
	    });
	  });
	  //this.db.close();
	});

});

app.listen(port, function() {
  console.log("Listening on " + port);
});


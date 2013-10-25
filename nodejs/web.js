var express = require("express");
var dbjs = require('./db.js');

var app = express();
//app.use(express.logger());

var port = process.env.PORT || 2345;
var port = 2345;
console.log("port = " + port);

var i=0;

app.get('/', function(request, response) {
	i++;
	var res = 'wings server: port:' + port + ' access ' + i;
	response.send(res);
	
	dbjs.g_db.collection('mydocs', function(er, collection){
		collection.insert({'k': i}, {safe: true}, function(er,rs) {});
	});
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

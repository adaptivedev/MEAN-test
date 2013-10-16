var express = require("express");
var app = express();
app.use(express.logger());

//var port = 5678;
var port = process.env.PORT || 80;
console.log("port = " + port);

var i=0;

app.get('/', function(request, response) {
  i++;
  response.send('port:' + port + ' access ' + i);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});

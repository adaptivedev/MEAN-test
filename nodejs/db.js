var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
		'mongodb://localhost/mydb';

mongo.Db.connect(mongoUri, function (err, db) {
	if(err != null) {
		throw(err);
	}
	else {
		exports.g_db = db;
		console.log("exports.g_db"+exports.g_db);
	}
});
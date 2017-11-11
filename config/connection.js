//Connet to mysql and export the connection

var mysql = require('mysql');

var source = {
	
		"development": {
		  "username": "root",
		  "password": "",
		  "database": "burger_db",
		  "host": "127.0.0.1",
		  "dialect": "mysql"
		},
};

var connection = mysql.createConnection(source.jaws);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
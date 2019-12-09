var mysql = require('mysql');

var connection = mysql.createConnection({
    port: "3306",
    host: "Localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;
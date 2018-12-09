const mysql = require("mysql");
const log = console.log

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  insecureAuth: true
});


connection.connect((err)=> {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
log("connect to db as id: " + connection.threadId);
});

module.exports = connection;

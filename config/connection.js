const mysql = require("mysql");
const log = console.log

const connection = mysql.createConnection({
  port: 3306,
  host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ffphy8rwjyvp3egb",
  password: "hlngcsd0setbb1ab",
  database: "ot8pm7w3l7jgid8g"
 
});


connection.connect((err)=> {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
log("connect to db as id: " + connection.threadId);
});

module.exports = connection;

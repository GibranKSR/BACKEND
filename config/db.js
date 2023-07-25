const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "4893",
  database: "motion",
});

db.getConnection(() => {
  console.log("Connection succesful");
});

module.exports = db;

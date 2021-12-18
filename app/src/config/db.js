const mysql = require("mysql");

const db = mysql.createConnection({
    user : process.env.DB_USER,
    password : process.env.DB_PW,
    database : process.env.DB_DATABASE,
});

db.connect();

module.exports = db;
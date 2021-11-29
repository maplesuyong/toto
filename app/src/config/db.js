const mysql = require("mysql");

const db = mysql.createConnection({
    user : 'root',
    password : '111111',
    database : 'toto', 
});

db.connect();

module.exports = db;
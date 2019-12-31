// setup the code to connect Node to MySQL.
// 
// Export the connection.

const mysql = require("mysql");

// https://devcenter.heroku.com/articles/jawsdb
// Documentation for heroku SQL database server

// MySQL Connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "bootcamp",
        database: "burgers_db"
    })
}

// MySQL Connection
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;

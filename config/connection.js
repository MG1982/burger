//Require mysql npm package to create a connection to the mysql database.
const mysql = require("mysql");

// Read and set any environment letiables with the dotenv package.
require("dotenv").config();

//Use production database when deployed.
if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
    //else use localhost database for local development.
    //MySQL password is passed into connection.js from the .env file using the dotenv npm package.
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "burger_db"
    });
}

connection.connect((err) => {
    //If there is an error when connecting to the database, log the error to the console.
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    //If a database connection is established, log the database thread number.
    console.log("connected as id " + connection.threadId);
});

//Export the connection properties so that we can use them in other files.
module.exports = connection;
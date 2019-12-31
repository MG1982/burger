// Import (require) connection.js into orm.js
// 
// Create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// 
// Export the ORM object in module.exports.

let connection = require("./connection.js");

let orm = {
    selectAll: (table, cb) => {
        let queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;
    }

}






module.exports = orm;
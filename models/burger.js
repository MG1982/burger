// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
    //Select all burgers from database.
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    //Create function to create a burger.
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    //Update function to update burger devoured state.
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },

    //Delete function to delete burger from database.
    delete: (condition, cb) => {
        orm.delete("burgers", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

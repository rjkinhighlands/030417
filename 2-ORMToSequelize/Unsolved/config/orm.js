// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection");

// ORM
// =============================================================

var tableName = "Todos";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getTodos: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      console.log(result);
      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single todo in the table.
  
  // Again, we make use of the callback to grab a specific todo from the database.

  deleteTodo: function(id, callback) {

    var s = "DELETE FROM " + tableName + " WHERE id=?";

    connection.query(s, [id], function(err, result) {

      callback(result);
    });

  },

  addTodo: function(todo, callback) {
    var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";

    todo.complete = todo.complete === 'true' ? 1 : 0;
    connection.query(s, [
      todo.text, todo.complete
    ], function(err, result) {

      callback(result);

    });
  },

  editTodo: function(todo, callback) {
    var s = "UPDATE " + tableName + " SET text=?, complete=? WHERE id=?";
    if (todo.complete === "false") {
      todo.complete = 0;
    } 
    else if (todo.complete === "true") {
      todo.complete = 1;
    }
    connection.query(s, [
      todo.text, todo.complete, todo.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;

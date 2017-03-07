// Sequelize wants us to wrap our "define" method in a function so we can pass in sequelize and DatatTypes
module.exports = function(sequelize, DataTypes) {
  // sequelize.define is used to create a model
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  // We return our model after defining
  return Todo;
};

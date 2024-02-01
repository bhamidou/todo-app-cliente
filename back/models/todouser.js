'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoUser extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsTo(models.Todo, {
        foreignKey: 'todo_id',
        as: 'todo'
      });
    }
  }
  TodoUser.init({
    user_id: DataTypes.INTEGER,
    todo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TodoUser',
  });
  return TodoUser;
};
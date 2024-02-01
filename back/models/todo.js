'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {


    static associate(models) {
      this.hasOne(models.TodoUser, {
        foreignKey: 'id',
        as: 'todo'
      });
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.INTEGER,
    difficulty: DataTypes.STRING,
    status: DataTypes.INTEGER,
    progress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
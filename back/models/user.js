'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Rol, {
        foreignKey: 'id',
        as: 'rolUser',
      });
      this.hasMany(models.TodoUser, {
        foreignKey: 'id',
        as: 'user'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    //tableName: 'users'
  });
  return User;
};
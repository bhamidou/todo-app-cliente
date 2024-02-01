'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {

    static associate(models) {
      this.hasMany(models.RolUser, {
        foreignKey: 'id',
        as: 'rol'
      });
      
    }
  }
  Rol.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};
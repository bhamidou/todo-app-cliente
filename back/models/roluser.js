'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolUser extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
      this.hasMany(models.Rol, {
        foreignKey: 'rol_id',
        as: 'rol',
      });
    }
  }
  RolUser.init({
    user_id: DataTypes.INTEGER,
    rol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RolUser',
  });
  return RolUser;
};
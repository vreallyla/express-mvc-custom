'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',

      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: {
          attributes: { include: ['password'] },
        }
      },
      hooks: {
        afterBulkCreate: (instances, options) => {
          let data = [];
          instances.forEach((v) => {
            data.push({ user_id: v.id });
          });
          sequelize.models.UserInformation.bulkCreate(data);
        },
        afterCreate: (instances, options) => {
          sequelize.models.UserInformation.create({ user_id: instances.id });
        },
      },
    }
  );
  return User;
};

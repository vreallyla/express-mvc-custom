'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('user_informations', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        phone: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        photo: {
          type: Sequelize.STRING,
        },
        user_id: {
          type: Sequelize.UUID,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addConstraint('user_informations', {
          fields: ['user_id'],
          type: 'foreign key',
          name: 'FK_UserInformations_Users',
          references: {
            //Required field
            table: 'Users',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        })
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'user_informations',
      'FK_UserInformations_Users'
    );
    await queryInterface.dropTable('user_informations');
  },
};

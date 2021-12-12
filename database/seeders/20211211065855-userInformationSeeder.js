'use strict';

const { User } = require('#models');
const faker = require('#help/fakerHelper.js');
let data = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = await User.findAll({
      attributes: [['id', 'user_id']],
      raw: true,
    });

    data.map((v) => {
      v.address = faker.address.streetAddress();
      v.phone=faker.phone.phoneNumber(),
      v.createdAt = new Date();
      v.updatedAt = new Date();
      return v;
    });
    return queryInterface.bulkInsert('user_informations', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

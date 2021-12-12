'use strict';

const faker = require('#help/fakerHelper.js');
let data = [];

[...Array(20).keys()].forEach((v) => {
  data.push({
    id:faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: '$2a$12$T9M0OPgPAHWm5GjgckYEuOJfzuCo4vZKZWJNe2RTZqRQdpVuP4F9S', //secret
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', data);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

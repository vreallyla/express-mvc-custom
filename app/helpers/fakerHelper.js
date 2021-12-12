const faker = require('faker');
const { faker_locale } = require('#con/app.js');

faker.locale = faker_locale;

module.exports = faker;

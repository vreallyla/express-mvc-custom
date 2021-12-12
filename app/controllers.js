const fs = require('fs');
const path = require('path');

const controllers = {};
const pathLocations = path.join(__dirname, 'controllers');
const basename = path.basename(__filename);

fs.readdirSync(pathLocations)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const funcMethod = require(path.join(pathLocations, file));
    controllers[funcMethod.name] = new funcMethod();
  });

module.exports = controllers;

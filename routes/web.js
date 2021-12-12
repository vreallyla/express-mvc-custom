const { UserController } = require('../app/controllers');
const { checkNotAuthenticated } = require('#mid/auth.js');

module.exports = (app) => {
  app.map({
    '/': {
      get: [checkNotAuthenticated, UserController.index],
    },
    '/user': {
      get: UserController.index,
    },
  });

  return app;
};

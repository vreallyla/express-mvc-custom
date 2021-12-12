const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('#models');

async function getUserByEmail(email) {
  return await User.scope('withPassword').findOne({ where: { email } });
}

async function getUserById(id) {
  return await User.findByPk(id);
}

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: 'No user with that email' });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        const res = user.dataValues;
        delete res['password'];
        return done(null, res);
      } else return done(null, false, { message: 'Password incorrect' });
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const res = await getUserById(id);
    return done(null, res.dataValues);
  });
}

module.exports = initialize;

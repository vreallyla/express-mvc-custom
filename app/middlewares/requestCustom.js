const { name, timezone, faker_locale, locale } = require('#con/app.js');

module.exports = function (req, res, next) {
  req.app_name = name;
  req.timezone = timezone;
  req.faker_locale = faker_locale;
  req.locale = locale; 

  next();
};

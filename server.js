const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const accessLogStream = require('#help/logHelper.js');
const {
  url_port,
  asset_url,
  middleware_global,
  session_secret,
} = require('#con/app.js');


//set env
const dotenv = require('dotenv');
dotenv.config();

//config passport
const initializePassport = require('#con/passport.js');
initializePassport(passport);

// setup express js
const app = express();
const port = url_port;
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: session_secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))



// setup the file location
app.use(asset_url || '/', express.static('public'));

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

//middleware global
const pathLocations = path.join(__dirname, 'app', 'middlewares');
const basename = path.basename(__filename);
fs.readdirSync(pathLocations)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.slice(0, -3).includes(middleware_global)
    );
  })
  .forEach((file) => {
    console.log(file);
    const funcMethod = require(path.join(pathLocations, file));
    app.use(funcMethod);
  });

// the routes loaded
app.map = require('#help/routeMapHelper.js')(app);
const alReadyRun = require('#web_routes')(app);

alReadyRun.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

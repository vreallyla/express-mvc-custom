module.exports = {
  /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */
  name: process.env.APP_NAME || 'noname',

  /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    |
    */

  env: process.env.NODE_ENV || 'production',

  /*
    |--------------------------------------------------------------------------
    | URL Port
    |--------------------------------------------------------------------------
    |
    | The default of URL port
    |
    */

  url_port: process.env.URL_PORT || 3000,
  asset_url: process.env.ASSET_URL || 'static',

  /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the Javascript date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

  timezone: 'Asia/Jakarta',

  /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */

  locale: 'en',
  locale_options:['en'],

   /*
    |--------------------------------------------------------------------------
    | Faker Locale
    |--------------------------------------------------------------------------
    |
    | This locale will be used by faker.js library when generating fake
    | data for your database seeds. For example, this will be used to get
    | localized telephone numbers, street address information and more.
    | try to visit https://www.npmjs.com/package/faker
    |
    */

    faker_locale : 'en_US',

    /*
    |--------------------------------------------------------------------------
    | Middleware Global
    |--------------------------------------------------------------------------
    |
    | selection the files by array
    |
    */

    middleware_global : ["requestCustom"],

    /*
    |--------------------------------------------------------------------------
    | session
    |--------------------------------------------------------------------------
    |
    | selection the files by array
    |
    */

    session_secret : process.env.SESSION_SECRET || 'session secret',
};

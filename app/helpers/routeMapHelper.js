var verbose = process.env.NODE_ENV !== 'test';

module.exports = (app) => {
  return function (a, route) {
    route = route || '';
    for (var key in a) {
      // { '/path': { ... }}
      if (Array.isArray(a[key])) {
        app[key](route, ...a[key]);
      } else if (typeof a[key] === 'object') {
        app.map(a[key], route + key);
        // get: function(){ ... }
      } else if (typeof a[key] === 'function') {
        // if (verbose) console.log('%s %s', key, route);
        app[key](route, a[key]);
        console.log(route);
      }
    }
  };
};

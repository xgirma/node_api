'use strict';

module.exports = function (app) {
  app.set('case sensitive routing', true);
  app.set('strict routing', true);
  app.set('x-powered-by', false);
  app.set('subdomain offset', 3);
};
'use strict';

var logger = require('./logger');

module.exports = function (app) {
  app.use(logger);
};
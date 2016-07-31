'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var responseTime = require('response-time');

module.exports = function (app) {
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(responseTime({digits: 4}));
};
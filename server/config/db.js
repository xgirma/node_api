'use strict';

var mongoose = require('mongoose');
var config = require('./config');

module.exports = function () {
  mongoose.connect(config.db.url);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to', config.db.url);
  });

  mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error', err);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected through app termination');
      process.exit(0);
    });
  });
};
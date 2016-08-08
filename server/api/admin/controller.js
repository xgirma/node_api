'use strict';

var Actors = require('./../actors/model');
var Movies = require('./../movies/model');
var seed = require('./seed.json');

exports.seedActors = function (req, res, next) {
  Actors
    .remove({}, function (err) {
      if (err) res.sendStatus(500);
    });

  Actors
    .create(seed.actors, function (err) {
      if (err) res.sendStatus(500);
      res.sendStatus(201);
    });
};

exports.removeActors = function (req, res, next) {
  Actors
    .remove({}, function (err) {
    if (err) res.sendStatus(500);
    res.sendStatus(202);
  });
};

exports.seedMovies = function (req, res, next) {
  Movies
    .remove({}, function (err) {
      if (err) res.sendStatus(500);
    });

  Movies.create(seed.movies, function (err) {
    if (err) res.sendStatus(500);
    res.sendStatus(201);
  });
};

exports.removeMovies = function (req, res, next) {
  Movies
    .remove({}, function (err) {
    if (err) res.sendStatus(500);
    res.sendStatus(202);
  });
};
'use strict';

var Actors = require('./../actors/model');
var Movies = require('./../movies/model');
var seed = require('./seed.json');

exports.seedActors = function (req, res, next) {
  Actors.create(seed.actors, function (err) {
    if (err) {
      //todo
    }
    res.json({"status": "ok"});
  });
};

exports.removeActors = function(req, res, next){
  Actors.remove({}, function (err) {
    if(err){
      //todo
    }
    res.json({"status": "ok"});
  })
};

exports.seedMovies = function (req, res, next) {
  Movies.create(seed.movies, function (err) {
    if (err) {
      //todo
    }
    res.json({"status": "ok"});
  });
};

exports.removeMovies = function(req, res, next){
  Movies.remove({}, function (err) {
    if(err){
      //todo
    }
    res.json({"status": "ok"});
  })
};
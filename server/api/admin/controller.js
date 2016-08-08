'use strict';

var Actors = require('./../actors/model');
var Movies = require('./../movies/model');
var seed = require('./seed.json');

exports.seedActors = function (req, res, next) {
  Actors.create(seed.actors, function (err) {
    if (err) {
      res.status(500).json({"message": "Seeding actors fails"});
    }
    res.status(201).json({"message": "Seeding actors successful"});
  });
};

exports.removeActors = function(req, res, next){
  Actors.remove({}, function (err) {
    if(err){
      res.status(500).json({"message": "Seeding actors fails"});
    }
    res.status(200).json({"message": "Removing actors successful"});
  });
};

exports.seedMovies = function (req, res, next) {
  Movies.create(seed.movies, function (err) {
    if (err) {
      res.status(500).json({"message": "Seeding movies fails"});
    }
    res.status(201).json({"message": "Movies seed successful"});
  });
};

exports.removeMovies = function(req, res, next){
  Movies.remove({}, function (err) {
    if(err){
      res.status(500).json({"message": "Seeding movies fails"});
    }
    res.status(200).json({"message": "Removing movies successful"});
  });
};
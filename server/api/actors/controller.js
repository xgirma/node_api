'use strict';

var Actors = require('./model');

exports.params = function(req, res, next, id){
  Actors.findById(id)
    .then(function (actor) {
      if(!actor){
        next(new Error("No actor found with this name"));
      } else {
        req.actor = actor;
        next();
      }
    }, function (err) {
      next(err);
    })
};

exports.get = function(req, res, next){
  Actors.find({})
    .then(function(actors){
      res.json(actors);
      // res.render('actors', {actors: actors});
    }, function (err) {
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var actor = req.actor;
  res.json(actor);
  // res.render('movies', {actor:actor});
};
'use strict';

var Actors = require('./model');

exports.params = function(req, res, next, id){
  var name = id[0].toUpperCase() + id.slice(1).toLowerCase();
  Actors
    .findById(name)
    .then(function (actor) {
      if(!actor){
        res.sendStatus(404);
      } else {
        req.actor = actor;
        next();
      }
    }, function (err) {
      next(err);
    })
};

exports.get = function(req, res, next){
  Actors
    .find({})
    .then(function(actors){
      res.json(actors);
    }, function (err) {
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var actor = req.actor;
  res.json(actor);
};
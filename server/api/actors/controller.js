'use strict';

var Actors = require('./model');

exports.params = function(req, res, next, id){
  Actors.findById(id)
    .then(function (actor) {
      if(!actor){
        res.redirect('/v1/actors'); //todo
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
    }, function (err) {
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var actor = req.actor;
  res.json(actor);
};
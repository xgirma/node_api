'use strict';

var Actors = require('./model');

exports.params = function(req, res, next, id){
  var name = id[0].toUpperCase() + id.slice(1).toLowerCase();
  Actors.findById(name)
    .then(function (actor) {
      if(!actor){
        res.status(404).json({"message" :'No actor called ' + req.params.id});
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
      res.status(200).json(actors);
    }, function (err) {
      next(err);
    });
};

exports.getOne = function(req, res, next){
  var actor = req.actor;
  res.status(200).json(actor);
};
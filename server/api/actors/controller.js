'use strict';

var Actors = require('./model');

exports.get = function(req, res, next){
  Actors.find({})
    .then(function(actors){
      res.render('actors', {actors: actors});
    }, function (err) {
      next(err);
    });
};
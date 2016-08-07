'use strict';

var Movies = require('./model');

exports.params = function (req, res, next, id) {
  Movies.findById(id)
    .then(function (actor) {
      if (!actor) {
        res.redirect('/v1/actors');
      } else {
        req.actor = actor;
        next();
      }
    }, function (err) {
      next(err);
    })
};

exports.get = function (req, res, next) {
  Movies.find({})
    .then(function (movieByActors) {
      res.json(movieByActors);
    }, function (err) {
      next(err);
    });
};

exports.getOne = function (req, res, next) {
  var actor = req.actor;
  Movies.findById(actor)
    .then(function (byActor) {
      res.json(byActor.movies);
    }, function (err) {
      next(err);
    });
};

exports.post = function (req, res, next) {
  var actor = req.actor;
  var body = req.body;

  Movies.findById(actor)
    .then(function () {
      var added = actor.movies.addToSet({
        _id: body.id,
        title: body.title,
        year: body.year
      });
      actor.save(function (err) {
        if (err) {
          console.log('error saving');
        } else {
          res.json(added);
        }
      });
    }, function (err) {
      next(err);
    });
};

exports.delete = function (req, res, next) {
  var actor = req.actor;
  var body = req.body;

  Movies.findById(actor)
    .then(function () {
      var remainingMovies = actor.movies.pull({
        _id: body.id
      });
      actor.save(function (err) {
        if (err) {
          console.log('error saving');
        } else {
          res.json(remainingMovies);
        }
      });
    }, function (err) {
      next(err);
    });
};
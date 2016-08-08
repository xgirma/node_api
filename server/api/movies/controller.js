'use strict';

var Movies = require('./model');

exports.params = function (req, res, next, id) {
  var name = id[0].toUpperCase() + id.slice(1).toLowerCase();
  Movies.findById(name)
    .then(function (actor) {
      if (!actor) {
        res.status(404).json({"message" :'No movies by ' + req.params.id});
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
        res.status(200).json(movieByActors);
    }, function (err) {
      next(err);
    });
};

exports.getOne = function (req, res, next) {
  var actor = req.actor;
  Movies.findById(actor)
    .then(function (byActor) {
      if (req.query.limit >= 0) {
        res.json.status(206).(byActor.movies.slice(0, req.query.limit));
      } else {
        res.status(200).json(byActor);
      }
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
          res.status(409).json({"message": body.title + '('+ body.year + ')' + ' already exist'});
        } else {
          res.status(201).json(added);
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
        title: body.title,
        year: body.year
      });
      actor.save(function (err) {
        if (err) {
          res.status(500).json({"message": "Save failed"});
        } else {
          res.status(200).json(remainingMovies);
        }
      });
    }, function (err) {
      next(err);
    });
};
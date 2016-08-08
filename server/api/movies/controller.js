'use strict';

var Movies = require('./model');

exports.params = function (req, res, next, id) {
  var name = id[0].toUpperCase() + id.slice(1).toLowerCase();
  Movies
    .findById(name)
    .then(function (actor) {
      if (!actor) {
        res.sendStatus(404);
      } else {
        req.actor = actor;
        next();
      }
    }, function (err) {
      next(err);
    })
};

exports.get = function (req, res, next) {
  Movies
    .find({})
    .then(function (movieByActors) {
        res.json(movieByActors);
    }, function (err) {
      next(err);
    });
};

exports.getOne = function (req, res, next) {
  var actor = req.actor;
  Movies
    .findById(actor)
    .then(function (byActor) {
      if (req.query.limit >= 0) {
        res.json(byActor.movies.slice(0, req.query.limit));
      } else {
        res.json(byActor);
      }
    }, function (err) {
      next(err);
    });
};

exports.post = function (req, res, next) {
  var actor = req.actor;
  var body = req.body;

  Movies
    .findById(actor)
    .then(function () {
      actor.movies.addToSet({
        _id: body.id,
        title: body.title,
        year: body.year
      });
      actor.save(function (err) {
        if (err) {
          res.sendStatus(409);
        } else {
          res.sendStatus(201);
        }
      });
    }, function (err) {
      next(err);
    });
};

exports.delete = function (req, res, next) {
  var actor = req.actor;
  var body = req.body;

  Movies
    .findById(actor)
    .then(function () {
      actor.movies.pull({
        title: body.title,
        year: body.year
      });
      actor.save(function (err) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(202);
        }
      });
    }, function (err) {
      next(err);
    });
};
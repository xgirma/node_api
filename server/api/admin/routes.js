'use strict';

var router = require('express').Router();
var controller = require('./controller');

router.route('/movies')
  .post(controller.seedMovies)
  .delete(controller.removeMovies);

router.route('/actors')
  .post(controller.seedActors)
  .delete(controller.removeActors);

module.exports = router;
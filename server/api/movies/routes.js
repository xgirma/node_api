'use strict';

var router = require('express').Router();
var controller = require('./controller');

router.param('id', controller.params);

router.route('/')
  .get(controller.get);

router.route('/:id')
  .get(controller.getOne)
  .post(controller.post)
  .delete(controller.delete);

module.exports = router;
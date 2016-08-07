'use strict';

var router = require('express').Router();

router.use('/actors', require('./actors/routes'));
router.use('/movies', require('./movies/routes'));
router.use('/admin', require('./admin/routes'));

module.exports = router;
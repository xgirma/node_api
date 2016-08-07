'use strict';

var router = require('express').Router();

router.use('/actors', require('./actors/routes'));
router.use('/movies', require('./movies/routes'));

module.exports = router;
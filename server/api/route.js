'use strict';

var router = require('express').Router();

router.use('/actors', require('./actors/routes'));

module.exports = router;
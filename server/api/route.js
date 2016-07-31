'use strict';

var router = require('express').Router();

router.use('/home', require('./home/routes'));

module.exports = router;
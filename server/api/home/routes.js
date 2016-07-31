'use strict';

var router = require('express').Router();

router.route('/')
  .get(function (req, res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('hello');
  });

module.exports = router;
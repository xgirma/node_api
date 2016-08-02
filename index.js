'use strict';

var config = require('./server/config/config');
var app = require('./server/server');
var express = require('express');
var path = require('path');

app.use(express.static(path.join(__dirname, 'images')));

var server = app.listen(config.port, function(){
  console.log('Serving [' + config.environment + ' code]' + ' at http://localhost:'
    + server.address().port);
});
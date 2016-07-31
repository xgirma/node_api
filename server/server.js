'use strict';

var express = require('express');
var app = express();
var api = require('./api/route');

require('./config/settings')(app);
require('./middleware/third.party')(app);

app.use('/api', api);

module.exports = app;
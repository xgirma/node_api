'use strict';

var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/route');
var config = require('./config/config');

require('mongoose').connect(config.db.url, function (err) {
  if (err) throw err;
  else (console.log('Connected to', config.db.url ));
});

require('./api/config')(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./middleware/third.party')(app);

app.use('/api', api);
app.use('/api', express.static(path.join(__dirname, 'images')));

module.exports = app;
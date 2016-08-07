'use strict';

var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/route');

require('./config/db')();

require('./api/config')(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./middleware/third.party')(app);

app.use('/v1', api);
app.use('/pics', express.static(path.join(__dirname, 'images')));

app.get('*', function(req, res){
  res.redirect('/v1/actors');
});

module.exports = app;
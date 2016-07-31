'use strict';

var config = require('./server/config/config');
var app = require('./server/server');

var server = app.listen(config.port, function(){
  console.log('Serving ' + config.environment + ' code' + ' at http://localhost:' + server.address().port);
});

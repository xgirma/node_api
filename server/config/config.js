var _ = require('lodash');

var config = {
  development: 'development',
  test: 'test',
  stage: 'stage',
  preview: 'preview',
  production: 'production',
  port: process.env.PORT || 3030
};

process.env.NODE_ENV = process.env.NODE_ENV || config.development;
config.environment = process.env.NODE_ENV;

var envConfig;

try {
  envConfig = require('./environment' + config.environment);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);




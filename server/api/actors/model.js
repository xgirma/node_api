'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorsSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

module.exports = mongoose.model('actors', ActorsSchema);
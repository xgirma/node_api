'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actorsSchema = new Schema({
  _id: String,
  last: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('actors', actorsSchema);
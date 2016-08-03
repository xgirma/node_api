'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
  title: String,
  year: Number
});

var ActorsSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  bio: String,
  movies : [MoviesSchema]
});

module.exports = mongoose.model('actors', ActorsSchema);
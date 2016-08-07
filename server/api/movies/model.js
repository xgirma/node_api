'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var date = new Date();
var year = date.getFullYear();

var moviesSchema = new Schema({
  _id: String,
  movies: [{
    _id: String,
    title: {type: String, required: true},
    year: {type: Number, min: 1900, max: year}
  }]
});

module.exports = mongoose.model('movies', moviesSchema);
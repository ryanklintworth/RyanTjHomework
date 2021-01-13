const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: String,
  image: String,
  date: String,
  rated: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie

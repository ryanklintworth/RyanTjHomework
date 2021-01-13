const express = require('express')
const movies = express.Router()

const Movie = require('../models/movies.js');


movies.get('/', (req, res) => {
  Movie.find({}, (err, foundMovies) => {
    res.json(foundMovies)
  })
})

movies.post('/', (req,res) => {
  Movie.create(req.body, (err, createdBird) => {
    Movie.find({}, (err, foundMovies) => {
    res.json(foundMovies)
    })

  })
})

movies.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(
    req.params.id, req.body, {new: true},
    (err, updatedBird) => {
      if (err) {
        res.send(err)
      }else {
        Movie.find({}, (err, foundMovies) => {
          res.json(foundMovies)
        })
      }
    }
  )
})

movies.delete('/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err, deletedBird) => {
    Movie.find({}, (err, foundMovies) => {
      res.json(foundMovies)
    })
  })
})


module.exports = movies

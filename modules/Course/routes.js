const express = require('express')
const router = express.Router()

const Controller = require('./controller')

router.get('/', (req, res, next) => {
  Controller.find( req, res, {} )
})

router.get('/:id', (req, res, next) => {
  Controller.findOne( req, res )
})

router.get('/:id/populate', (req, res, next) => {
  Controller.findOne( req, res )
    .populate('teacher')
    .populate('students')
    .populate('books')
})

router.get('/search/params', (req, res, next) => {
  Controller.search( req, res )
})

router.post('/', (req, res, next) => {
  Controller.create( req, res )
})

router.put('/:id', (req, res, next) => {
  Controller.update( req, res )
})

router.delete('/:id', (req, res, next) => {
  Controller.remove( req, res )
})

module.exports = router

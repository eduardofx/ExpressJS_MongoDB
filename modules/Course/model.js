const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
const MODEL_NAME = 'Course'

const _schema = {
  name: {
    type: String,
    required: true
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }],
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }]
}

const schema = new mongoose.Schema(_schema)
module.exports = mongoose.model(MODEL_NAME, schema)
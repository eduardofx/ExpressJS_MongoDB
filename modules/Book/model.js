const mongoose = require( 'mongoose' )

const MODEL_NAME = 'Book';

const _schema = {
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  }
}
const schema = new mongoose.Schema(_schema)

module.exports = mongoose.model(MODEL_NAME, schema)
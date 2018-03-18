const mongoose = require( 'mongoose' )

const MODEL_NAME = 'User'

const _schema = {
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: String
}
const schema = new mongoose.Schema(_schema)

module.exports = mongoose.model(MODEL_NAME, schema)
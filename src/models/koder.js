
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2
  },
  age: {
    type: Number,
    min: 15,
    max: 100,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: [
      'male',
      'female',
      'nonbinary'
    ]
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/
  },
  password: {
    type: String,
    required: true,
    min: 1
  }

})

module.exports = mongoose.model('Koders', koderSchema)
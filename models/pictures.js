const { model, Schema } = require('mongoose')

const picturesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
})

const Picture = model('pictures', picturesSchema)

module.exports = Picture

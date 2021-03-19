const { model, Schema } = require('mongoose')

const picturesSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  cost: String,
  image: String,
})

const Picture = model('pictures', picturesSchema)

module.exports = Picture

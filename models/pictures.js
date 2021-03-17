const { model, Schema } = require('mongoose')

const picturesSchema = new Schema ({
  title: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  }
})

module.exports = model('pictures', picturesSchema)

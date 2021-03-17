const { model, Schema } = require('mongoose')

const clientSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  personalPhone: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
})

module.exports = model('clients', clientSchema)

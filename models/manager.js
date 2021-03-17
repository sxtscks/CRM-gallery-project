const { model, Schema } = require('mongoose')

const managerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const Manager = model('manager', managerSchema)

module.exports = Manager

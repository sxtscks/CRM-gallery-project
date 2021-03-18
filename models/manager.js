const { model, Schema } = require('mongoose')

const managerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }, 
  role: Boolean
})

const Manager = model('manager', managerSchema)

module.exports = Manager

const { model, Schema } = require('mongoose')

const clientSchema = new Schema({
  companyName: {
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
  },
  picturesLiked: [{
    type: Schema.Types.ObjectId,
    ref: 'pictures'
  }],
  picturesBought: [{
    type: Schema.Types.ObjectId,
    ref: 'pictures'
  }],
  createdAt: String,
  updatedAt: Date,
},
  { timestamps: true }
)

const Client = model('users', clientSchema)

module.exports = Client

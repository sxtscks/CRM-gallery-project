const { model, Schema } = require('mongoose')

const clientSchema = new Schema({
  companyName: {
    type: String,
  },
  phone: {
    type: String,
  },
  contactPerson: {
    type: String,
  },
  personalPhone: {
    type: String
  },
  email: {
    type: String,
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
  createdAt: Date,
  updatedAt: Date,
},
  { timestamps: true }
)

const Client = model('clients', clientSchema)

module.exports = Client

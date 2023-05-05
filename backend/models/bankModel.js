const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    required: false,
    min: 0,
    default: 0
  },
  currency: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: false,
    default: 1
  }
}, {
  timestamps: true
});

const Account = mongoose.model('Account', accountSchema)

module.exports = Account
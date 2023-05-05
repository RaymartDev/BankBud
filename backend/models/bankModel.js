const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
    primaryKey: true
  },
  balance: {
    type: Number,
    required: false,
    min: 0,
    default: 0
  },
  currency: {
    type: String,
    required: false,
    default: 'USD'
  },
  status: {
    type: Number,
    required: false,
    default: 1
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', bankSchema)

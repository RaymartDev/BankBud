const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
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
    required: false,
    default: 'USD'
  },
  status: {
    type: Number,
    required: false,
    default: 1
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  transactionHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Bank', bankSchema)

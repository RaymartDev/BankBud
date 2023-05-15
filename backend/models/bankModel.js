import {Schema as _Schema,model} from 'mongoose';

const bankSchema = new _Schema({
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
    required: false,
    default: 'USD'
  },
  status: {
    type: Number,
    required: false,
    default: 1
  },
  owner: {
    type: _Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

export default model('Bank', bankSchema)

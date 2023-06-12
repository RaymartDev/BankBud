const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    transactionType: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema)
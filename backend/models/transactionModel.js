import {
    Schema as _Schema,
    model
} from 'mongoose'

const transactionSchema = new _Schema({
    transactionType: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    actor: {
        type: _Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: _Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

export default model('Transaction', transactionSchema)
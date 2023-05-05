const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bank: [{
        type: Schema.Types.ObjectId,
        ref: 'Bank'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
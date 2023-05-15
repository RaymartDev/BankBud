import {Schema as _Schema,model} from 'mongoose';

const userSchema = new _Schema({
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

export default model('User', userSchema)
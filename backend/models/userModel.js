const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: false
    },
    password: {
        type: String,
        required: true
    },
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false,
        defualt: false
    }
}, {
    timestamps: true
})

userSchema.statics.signup = async function(email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Invalid email')
    }

    const exists = await this.findOne({email})

    if(exists) {
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}

// static login method
userSchema.statics.login = async function(email, password) {
    
    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if(!user) {
        throw Error('Invalid Credentials')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Invalid Credentials')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
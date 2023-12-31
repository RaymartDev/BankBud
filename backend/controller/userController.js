const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const Bank = require('../models/bankModel')
const Profile = require('../models/profileModel')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1h'})
}


const generateAccountNumber = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    const prefix = '1969'; // Starting with 1969
    const randomDigits = Math.floor(1000000000000000 + Math.random() * 9000000000000000); // Generate random 16-digit number
  
    return `${prefix}${month}${day}${year}${randomDigits}`;
}

// login user
const loginUser = async(req, res) => {
    const token = req.cookies.token
    if(token) {
        try{
            jwt.verify(token, process.env.SECRET)
            return res.status(200).json({ token })
        }catch(err) {
            return res.status(400).json({error: err.message})
        }
    }

    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('token', token)
        res.status(200).json({token})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

// register user
const registerUser = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        const bank = new Bank({
            accountNumber: generateAccountNumber(), // Generate a unique account number
            owner: user._id, // Assign the user as the owner of the bank
        });

        const profile = new Profile({
            owner: user._id
        })

        await profile.save()
        await bank.save()
        user.bank = bank._id
        user.profile = profile._id
        await user.save()

        const token = createToken(user._id)

        res.cookie('token', token)
        res.status(200).json({token})
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    loginUser,
    registerUser
}

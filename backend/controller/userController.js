import User from '../models/userModel'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
    jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

// login user
const loginUser = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    res.json({msg: 'Login user'})
}

// register user
const registerUser = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(err) {
        res.status(400).json({error: err.message})
    }

    res.json({msg: 'Register user'})
}

export default {
    loginUser,
    registerUser
}
const express = require('express')
const {
    loginUser,
    registerUser
} = require('../controller/userController')

const router = express.Router()
const cookieParser = require('cookie-parser');

module.exports = (jsonParser) => {
    router.post('/register', jsonParser,cookieParser, registerUser)
    router.post('/login', jsonParser, cookieParser, loginUser)

    return router
}
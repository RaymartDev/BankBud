const express = require('express')
const {
    loginUser,
    registerUser
} = require('../controller/userController')

const router = express.Router()

module.exports = (jsonParser) => {
    router.post('/register', jsonParser, registerUser)
    router.post('/login', jsonParser, loginUser)

    return router
}
const express = require('express')
const {
    loginUser,
    registerUser,
    loginToken
} = require('../controller/userController')

const router = express.Router()

module.exports = (jsonParser) => {
    router.post('/register', jsonParser, registerUser)
    router.post('/login', jsonParser, loginUser)
    router.post('/loginToken', jsonParser, loginToken)

    return router
}
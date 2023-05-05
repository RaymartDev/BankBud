const express = require('express')
const router = express.Router()
const {
    checkBalance,
    deposit,
    withdraw,
    closeAccount
} = require('../controller/bankController')

module.exports = (jsonParser) => {
    // Define a GET request handler for '/api/accounts/:accountNumber'
    router.get('/balance/:accountNumber', checkBalance)

    router.post('/deposit', jsonParser, deposit)

    router.post('/withdraw', jsonParser, withdraw)

    router.post('/close', jsonParser, closeAccount)

    return router
}

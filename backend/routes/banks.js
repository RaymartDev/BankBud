const express = require('express')
const router = express.Router()
const {
    checkBalance,
    deposit,
    withdraw,
    closeAccount
} = require('../controller/bankController')

module.exports = (jsonParser) => {
    // get request
    router.get('/balance/:accountNumber', checkBalance)
    
    // post requests
    router.post('/deposit', jsonParser, deposit)
    router.post('/withdraw', jsonParser, withdraw)
    router.post('/close', jsonParser, closeAccount)

    return router
}

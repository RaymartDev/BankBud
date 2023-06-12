const express = require('express')
import {
    deposit,
    withdraw,
    transferBalance,
    checkBalance,
    closeAccount
} from '../controller/bankController';

const router = express.Router()

module.exports = (jsonParser, auth) => {
    // get request
    router.get('/balance/:accountNumber', jsonParser , auth, checkBalance)
    
    // post requests
    router.post('/deposit', jsonParser, auth, deposit)
    router.post('/withdraw', jsonParser, auth, withdraw)
    router.post('/close', jsonParser, auth, closeAccount)
    router.post('/transfer', jsonParser, auth, transferBalance)

    return router
}
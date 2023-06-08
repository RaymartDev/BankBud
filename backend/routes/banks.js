import { Router } from 'express';
import {
    checkBalance,
    deposit,
    withdraw,
    closeAccount
} from '../controller/bankController';

const router = Router()

export default (jsonParser, auth) => {
    // get request
    router.get('/balance/:accountNumber', jsonParser , auth, checkBalance)
    
    // post requests
    router.post('/deposit', jsonParser, auth, deposit)
    router.post('/withdraw', jsonParser, auth, withdraw)
    router.post('/close', jsonParser, auth, closeAccount)

    return router
}
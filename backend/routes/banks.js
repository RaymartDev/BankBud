import {Router} from 'express';
import {
    checkBalance,
    deposit,
    withdraw,
    closeAccount
} from '../controller/bankController';

const router = Router()

export default (jsonParser) => {
    // get request
    router.get('/balance/:accountNumber', checkBalance)
    
    // post requests
    router.post('/deposit', jsonParser, deposit)
    router.post('/withdraw', jsonParser, withdraw)
    router.post('/close', jsonParser, closeAccount)

    return router
}

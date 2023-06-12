import Transaction from '../models/transactionModel';
import User from '../models/userModel';
import Bank from '../models/bankModel'

    /**
     * ? Check the balance of the account based on the account number given
     * ! If account number did not exist return 404
     * * It will return to 200 and the balance of the account.
     * ! If it catched any unknown error return to 500
     * @param req the object for request
     * @param res the object for response
     */  

const checkBalance = async (req, res) => {
    try {

      const accountInfo = await Bank.findOne({ owner: req.user._id })

      // if account not found
      if (!accountInfo) {
        return res.status(404).json({ error: 'Account not found' })
      }

      // if found
      const transactionHistory = new Transaction({
        transactionType: 0,
        amount: 0,
        actor: accountInfo.owner,
        owner: accountInfo.owner
      })

      await transactionHistory.save()

      res.status(200).json( { msg: 'Successfully checked balance', balance : accountInfo.balance })

    } catch (err) {
      // Unknown error
      return res.status(500).json({ error: 'Internal server error' })
    }
}

    /**
     * ? This will just add the value of what is in the account to whatever the amount is being deposited
     * ! If account number did not exist return 404
     * * It will return to 200 and the balance of the account and save.
     * ! If it catched any unknown error return to 500
     * @param req the object for request
     * @param res the object for response
     */  
    
const deposit = async (req, res) => {
    try {

        const { depositAmount } = req.body
        // Find account
        const account = await Bank.findOne({ owner: req.user._id })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        // if found
        const transactionHistory = new Transaction({
            transactionType: 1,
            amount: depositAmount,
            actor: accountInfo.owner,
            owner: accountInfo.owner
        })

        await transactionHistory.save()
      
        // Add the deposit amount and save
        account.balance += depositAmount
        await account.save()

        // updated account
        res.status(200).json({ msg: `Successfully deposited ${depositAmount}`,balance: account.balance })
    } catch(err) {
        // If there is an error, return a 500 Internal Server Error
        return res.status(500).json({ error: 'Internal server error' })
    }
}

    /**
     * ? This will just subtract the value of what is in the account to whatever the amount is being withdrawn
     * ! If account number did not exist return 404
     * ! If the account has insufficient balance or the amount being withdrawn is greater then it will return to 400
     * * It will return to 200 and the balance of the account and save.
     * ! If it catched any unknown error return to 500
     * @param req the object for request
     * @param res the object for response
     */  

const withdraw = async (req, res) => {
    try {

        const { withdrawalAmount } = req.body
        // Find account
        const account = await Bank.findOne({ owner: req.user._id })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        // Inssuficient
        if (account.balance < withdrawalAmount) {
            return res.status(400).json({ error: 'Insufficient balance' })
        }

        // if found
        const transactionHistory = new Transaction({
            transactionType: 2,
            amount: withdrawalAmount,
            actor: accountInfo.owner,
            owner: accountInfo.owner
        })

        await transactionHistory.save()

        // Add the deposit amount and save
        account.balance -= withdrawalAmount
        await account.save()

        // return updated account
        res.status(200).json({ msg: `Successfully withdrawn ${withdrawalAmount}`,balance: account.balance })
    } catch(err) {
        // If there is an error, return a 500 Internal Server Error
        return res.status(500).json({ error: 'Internal server error' })
    }
}
    /**
     * ? This will transfer balance from one account to another 
     * ! If account number did not exist return 404
     * ! If account lacks of balance return 400
     * * It will return to 200 and provide info what transcribed!
     * ! If it catched any unknown error return to 500
     * @param req the object for request
     * @param res the object for response
     */  
const transferBalance = async(req, res) => {
    try {

        const { to, balance } = req.body

        // Find account
        const account = await Bank.findOne({ owner: req.user._id })

        if(account.balance < balance) {
            return res.status(400).json({ error: 'Insufficient balance' })
        }

        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        const accountTo = await User.findOne({ email: to })
            .select('bank')
            .populate('bank')

        if(!accountTo) {
            return res.status(404).json({ error: 'User not found' })
        }

        // if found
        const transactionHistory = new Transaction({
            transactionType: 3,
            amount: balance,
            actor: accountTo._id,
            owner: account.owner
        })

        const transactionHistory2 = new Transaction({
            transactionType: 4,
            amount: balance,
            actor: account.owner,
            owner: accountTo._id
        })

        await transactionHistory.save()
        await transactionHistory2.save()

        account.balance -= balance
        accountTo.bank.balance += balance

        await account.save()
        await accountTo.bank.save()

        res.status(200).json({ msg: 'Successful Transfer!', balance: account.balance })
    }catch(err) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

    /**
     * ? This will just close an existing account
     * ! If account number did not exist return 404
     * ! If account is already closed it will just return 400 and an error message
     * * It will return to 200 and the status of the account (0 for closed and 1 for active).
     * ! If it catched any unknown error return to 500
     * @param req the object for request
     * @param res the object for response
     */  

const closeAccount = async(req, res) => {
    try {
        
        // Find account
        const account = await Bank.findOne({ owner: req.user._id })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        // If already closed
        if(account.status === 0) {
            return res.status(400).json( {error: 'Account is already closed'} )
        }

        account.status = 0
        await account.save()

        // return updated status
        res.status(200).json({ msg:'Successfully closed account', status: account.status })
    } catch(err) {
        // Unknown error
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export default {
    checkBalance,
    withdraw,
    deposit,
    closeAccount,
    transferBalance
}
const Bank = require('../models/bankModel')

const checkBalance = async (req, res) => {
    try {
      const { accountNumber } = req.params
      // Retrieve the account information from the database or some other source
      const accountInfo = await Bank.findOne({ accountNumber })
      if (!accountInfo) {
        // If no account information is found, return a 404 Not Found error
        return res.status(404).json({ error: 'Account not found' })
      }
      // If the account information is found, return it as a JSON object
      res.status(200).json( {balance : accountInfo.balance })
    } catch (err) {
      // If there is an error, return a 500 Internal Server Error
      return res.status(500).json({ error: 'Internal server error' })
    }
}

const deposit = async (req, res) => {
    try {
        const { accountNumber, depositAmount } = req.body
        // Find account
        const account = await Bank.findOne({ accountNumber })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }
      
        // Add the deposit amount and save
        account.balance += depositAmount
        await account.save()

        // updated account
        res.status(200).json({ balance: account.balance })
    }catch(err) {
        // If there is an error, return a 500 Internal Server Error
        return res.status(500).json({ error: 'Internal server error' })
    }
}

const withdraw = async (req, res) => {
    try {
        const { accountNumber, depositAmount } = req.body
        // Find account
        const account = await Bank.findOne({ accountNumber })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        // Inssuficient
        if (account.balance < withdrawalAmount) {
            return res.status(400).json({ error: 'Insufficient balance' })
        }

        // Add the deposit amount and save
        account.balance -= depositAmount
        await account.save()

        // return updated account
        res.status(200).json({ balance: account.balance })
    }catch(err) {
        // If there is an error, return a 500 Internal Server Error
        return res.status(500).json({ error: 'Internal server error' })
    }
}

const closeAccount = async(req, res) => {
    try {
        const { accountNumber } = req.body
        // Find account
        const account = await Bank.findOne({ accountNumber })

        // If not found
        if(!account) {
            return res.status(404).json({ error: 'Account not found' })
        }

        account.status = 0

        // return updated status
        res.status(200).json({ status: account.status })
    }catch(err) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = {
    checkBalance,
    withdraw,
    deposit,
    closeAccount
}
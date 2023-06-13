const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    try {
      // Verify authentication
      const { authorization } = req.headers
  
      if (!authorization) {
        return res.status(401).json({ error: 'Authorization Required' })
      }
  
      const token = authorization.split(' ')[1]
  
      const { _id } = jwt.verify(token, process.env.SECRET)
  
      req.user = await User.findOne({ _id }).select('_id')
      next()
    } catch (err) {
      res.status(401).json({ error: 'You are not authorized to do that' })
    }
};
  

module.exports = requireAuth
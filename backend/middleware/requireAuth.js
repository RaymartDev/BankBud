const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    try {
      // Verify authentication
      const { authorization } = req.headers;
  
      if (!authorization) {
        return res.status(401).json({ error: 'Auth required' });
      }
  
      const token = authorization.split(' ')[1];
  
      const { _id } = jwt.verify(token, process.env.SECRET);
  
      req.user = await User.findOne({ _id }).select('_id');
      next();
    } catch (err) {
      res.status(401).json({ error: 'Request is not authorized' });
    }
};
  

module.exports = requireAuth
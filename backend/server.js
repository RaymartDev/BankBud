const express = require('express')
const requireAuth = require('./middleware/requireAuth')
const mongoose = require('mongoose')
const bankRoutes = require('./routes/banks')
require('dotenv').config()

const port = process.env.PORT || 4000

// Initialize express app
const app = express()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    // connected to the database
    console.log('Connected to the MongoDB')

    // routes
    app.use('/api/bank', bankRoutes(express.json(), requireAuth()))

    app.listen(port, () => {
        console.log(`Listening to port ${port}`)
    })
}).catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(-1)
})
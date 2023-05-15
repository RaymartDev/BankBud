import express,{json} from 'express';
import {connect} from 'mongoose';
import bankRoutes from './routes/banks';
import dotenv from 'dotenv'

// environment variables
dotenv.config()
const port = process.env.PORT || 4000

// Initialize express app
const app = express()

connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    // connected to the database
    console.log('Connected to the MongoDB')

    // routes
    app.use('/api/bank', bankRoutes(json()))

    app.listen(port, () => {
        console.log(`Listening to port ${port}`)
    })
}).catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(-1)
})


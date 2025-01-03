import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import AuthRouter from './Routes/Authentication.js'
import ProdRouter from './Routes/Products.js'


dotenv.config()

const app = express()

// MongoDB Server Setup
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB server");
    } catch (error) {
        throw error;
    }
}

// Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routers
app.use('/api/auth',AuthRouter)
app.use('/api/products',ProdRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    connect()
    console.log(`Server is running on Port ${process.env.PORT}`)
})
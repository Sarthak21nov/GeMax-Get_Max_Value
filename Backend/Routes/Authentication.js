import express from 'express'
import { SignIn, SignUp } from '../Controller/AuthenticationController.js'


const app = express.Router()

app.post('/SignIn', SignIn)
app.post('/SignUp', SignUp)

export default app
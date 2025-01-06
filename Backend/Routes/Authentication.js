import express from 'express'
import { SignIn, SignUp } from '../Controller/AuthenticationController.js'
import upload from '../utils/FileUploadUtil.js'


const app = express.Router()

app.post('/SignIn', SignIn)
app.post('/SignUp',upload.single('ProfilePic'), SignUp)

export default app
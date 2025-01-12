import express from 'express'
import { getUser, SignIn, SignUp } from '../Controller/AuthenticationController.js'
import upload from '../utils/FileUploadUtil.js'


const app = express.Router()

app.post('/SignIn', SignIn)
app.post('/SignUp',upload.single('ProfilePic'), SignUp)
app.get('/getUser', getUser)

export default app
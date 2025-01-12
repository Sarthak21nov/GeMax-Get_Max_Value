import express from 'express'
import { AddProduct, DeleteProductBasedOnId, ListAllProduct, ListProductBasedOnCategory, ListProductBasedOnSeller } from '../Controller/ProductController.js'
import upload from '../utils/FileUploadUtil.js'

const app = express.Router()

app.post('/AddProduct', upload.array('ProductImages', 10) , AddProduct)
app.get('/listAll', ListAllProduct)
app.delete('/DeletedProduct', DeleteProductBasedOnId)
app.get('/Category', ListProductBasedOnCategory)
app.get('/listings', ListProductBasedOnSeller)

export default app
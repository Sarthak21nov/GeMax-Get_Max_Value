import express from 'express'
import { AddProduct, DeleteProductBasedOnId, ListAllProduct, ListProductBasedOnCategory, ListProductBasedOnSeller } from '../Controller/ProductController.js'

const app = express.Router()

app.post('/AddProduct', AddProduct)
app.get('/listAll', ListAllProduct)
app.delete('/DeletedProduct:id', DeleteProductBasedOnId)
app.get('/Category', ListProductBasedOnCategory)
app.get('/listings', ListProductBasedOnSeller)

export default app
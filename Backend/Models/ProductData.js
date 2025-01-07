import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    ProductImages:{
        type: String,
        validate: {
            validator: function(array) {
                return array.length >= 2 && array.length <= 10
            },
            message: "Please upload minimum 2 images and maximum 10 images"
        },
        required: true
    },
    ProductName:{
        type: String,
        required: true
    },
    ProductPrice:{
        type: Number,
        required: true
    },
    ProductDescription:{
        type: String,
        required: true
    },
    SelectCategory:{
        type: String,
        required: true
    },
    SellerName:{
        type: String,
        required: true
    },
    CustomerID: {
        type: String,
        required: true
    }
})

const ProductData = mongoose.model('ProductData', ProductSchema)
export default ProductData
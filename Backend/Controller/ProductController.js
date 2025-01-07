import CustData from "../Models/CustData.js"
import ProductData from "../Models/ProductData.js"

export const AddProduct = async (req,res)=>{
    const { ProductName, ProductPrice, ProductDescription, SelectCategory, CustomerID } = req.body
    if(!ProductName || !ProductPrice || !ProductDescription || !SelectCategory || !CustomerID){
        return res.status(400).json({"message" : "All Fields are Mandatory"})
    }

    const ProductImages = req.files

    if(!ProductImages){
        return res.status(400).json({"message": "Please upload minimum 2 images and maximum 10 images of the product"})
    }

    if(ProductImages.length < 2 || ProductImages.length > 10){
        return res.status(400).json({"message": "Please upload at least 2 images and at most 10 images "})
    }

    try{
        const UserCredentials = await CustData.findById(CustomerID)
        if(!UserCredentials){
            return res.status(400).json({"message": "Please Log in First to Add Product"})
        }
        const CustomerName = UserCredentials.Name

        const newProduct = new ProductData({
            ProductImages,
            ProductName,
            ProductPrice,
            ProductDescription,
            SelectCategory,
            CustomerID,
            SellerName: CustomerName
        })

        await newProduct.save()
        return res.status(200).json({"message": "Product Added Successfully"})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }

}

export const ListAllProduct =  async (req,res)=>{
    try{
        const AllProducts = await ProductData.find()
        return res.status(200).json({"message": "All Products", "Products": AllProducts})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}

export const DeleteProductBasedOnId = async (req,res)=>{
    const { ProductId, CustomerID }  = req.body
    if(!ProductId || !CustomerID){
        return res.status(400).json({"message": "Unable to get Product ID or Product ID"})
    }
    try{
        const UserCredentials = await CustData.findById(CustomerID)
        const ProductDetails = await ProductData.findById(ProductId)
        if(UserCredentials._id != ProductDetails.CustomerID){
            return res.status(400).json({"message": "Unauthorized to Delete the Product"})
        } else {
            await ProductData.findByIdAndDelete(ProductId)
            return res.status(200).json({"message": "Product Deleted Successfully"})
        }
    } catch (err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}

export const ListProductBasedOnCategory = async (req,res)=>{
    const { Category } = req.body
    if(!Category) {
        return res.status(400).json({"message": "Did not get the Category"})
    }
    try{
        const Products = await ProductData.find({SelectCategory: Category})
        return res.status(200).json({"message": "Products Found", "Products": Products})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}

export const ListProductBasedOnSeller = async (req,res)=>{
    const { SellerId } = req.body 
    if(!SellerId){
        return res.status(400).json({"message": "Did Not got Seller ID"})
    }
    try{
        const Products = await ProductData.find({CustomerID: SellerId})
        return res.status(200).json({"message": "Products Found", "Products": Products})

    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}
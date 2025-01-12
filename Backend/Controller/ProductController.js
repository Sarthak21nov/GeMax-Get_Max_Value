import CustData from "../Models/CustData.js"
import ProductData from "../Models/ProductData.js"

export const AddProduct = async (req,res)=>{
    const { ProductName, ProductPrice, ProductDescription, SelectCategory, CustomerID } = req.body
    if(!ProductName || !ProductPrice || !ProductDescription || !SelectCategory || !CustomerID){
        return res.status(400).json({"message" : "All Fields are Mandatory", "success": false})
    }

    const ProductImages = req.files
    console.log(ProductImages)

    if(!ProductImages){
        return res.status(400).json({"message": "Please upload minimum 2 images and maximum 10 images of the product", "success": false})
    }

    if(ProductImages.length < 2 || ProductImages.length > 10){
        return res.status(400).json({"message": "Please upload at least 2 images and at most 10 images", "success": false})
    }

    try{
        const UserCredentials = await CustData.findById(CustomerID)
        if(!UserCredentials){
            return res.status(400).json({"message": "UnAuthorized", "success": "false"})
        }
        const CustomerName = UserCredentials.Name

        const imagePaths = ProductImages.map((file) => file.path);

        const newProduct = new ProductData({
            ProductImages: imagePaths,
            ProductName,
            ProductPrice,
            ProductDescription,
            SelectCategory,
            CustomerID,
            SellerName: CustomerName
        })

        await newProduct.save()
        return res.status(200).json({"message": "Product Added Successfully", "success": true})
    } catch(SaveError){
        return res.status(500).json({"message": "Internal Server Error", "Error": SaveError, "success": false})
    }

}

export const ListAllProduct =  async (req,res)=>{
    try{
        const AllProducts = await ProductData.find()
        return res.status(200).json({"message": "All Products", "Products": AllProducts, "success": true})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}

export const DeleteProductBasedOnId = async (req,res)=>{
    const { ProductId, CustomerID }  = req.query
    if(!ProductId || !CustomerID){
        return res.status(400).json({"message": "Unable to get Product ID or Product ID", "success": false})
    }
    try{
        const UserCredentials = await CustData.findById(CustomerID)
        const ProductDetails = await ProductData.findById(ProductId)
        if(UserCredentials._id != ProductDetails.CustomerID){
            return res.status(400).json({"message": "Unauthorized to Delete the Product", "success": false})
        } else {
            await ProductData.findByIdAndDelete(ProductId)
            return res.status(200).json({"message": "Product Deleted Successfully", "success": true})
        }
    } catch (err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}

export const ListProductBasedOnCategory = async (req,res)=>{
    const { Category } = req.query
    if(!Category) {
        return res.status(400).json({"message": "Did not get the Category", "success": false})
    }
    try{
        const Products = await ProductData.find({SelectCategory: Category})
        return res.status(200).json({"message": "Products Found", "Products": Products, "success": true})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}

export const ListProductBasedOnSeller = async (req,res)=>{
    const { CustomerID } = req.query
    if(!CustomerID){
        return res.status(400).json({"message": "Did Not got Seller ID", "success": false})
    }
    try{
        const Products = await ProductData.find({CustomerID: CustomerID})
        return res.status(200).json({"message": "Products Found", "Products": Products, "success": true})

    } catch(err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}
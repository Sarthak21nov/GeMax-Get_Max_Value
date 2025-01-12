import CustData from "../Models/CustData.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const SignIn = async (req, res)=>{
    const { Email, Password } = req.body 
    if( !Email || !Password){
        return res.status(400).json({"message": "All fields are Mandatory", "success": false})
    }
    try{
        const userCredentials = await CustData.findOne({Email: Email})
        if(!userCredentials){
            return res.status(400).json({"message": "User Does not exist", "success": false})
        } 
        else{
            const userPassword = await bcrypt.compare(Password, userCredentials.Password)
            if(!userPassword){
                return res.status(400).json({"message": "Invalid Email ID or Password", "success": false})
            } else{
                const token = jwt.sign({id: userCredentials._id}, process.env.JWT_SECRET)

                res.cookie('auth_token', token, {
                    httpOnly: true,  // Prevent client-side JavaScript from accessing the cookie
                    secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                    sameSite: 'strict', // Protect against CSRF
                    maxAge: 72* 60 * 60 * 1000, // 72 hour in milliseconds
                });

                return res.status(200).json({"message": "Logged In Successfully", "AuthToken": token, "CustomerID": userCredentials._id, "CustomerName": userCredentials.Name, "success": true})
            }
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}

export const SignUp = async (req,res)=>{
    const { Name, PhoneNumber, Email, Gender, Password } = req.body
    if( !Name || !PhoneNumber || !Email || !Gender || !Password ){
        return res.status(400).json({"message": "All fields are Mandatory", "success": false})
    }
    
    const profilePicturePath = req.file ? `/uploads/${req.file.filename}` : null;
    console.log(req.file)

    try{
        const userExist = await CustData.findOne({Email})
        if(userExist){
            return res.status(400).json({"message": "User Already Exist", "success": false})
        }

        const hashedPassword = await bcrypt.hash(Password, 10)

        const newUser = new CustData({
            Name, 
            PhoneNumber,
            Email,
            Gender, 
            Password: hashedPassword,
            ProfilePic: profilePicturePath
        })
        await newUser.save()
        return res.status(200).json({"message": "Registration completed successfully", "success": true})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    }
}

export const getUser = async (req,res)=>{
    const { CustomerID } = req.query
    if(!CustomerID){
        return res.status(400).json({"message": "PLease Login First", "success": false})  
    }

    try{
        const userCredentials = await CustData.findOne({_id: CustomerID})
        if(!userCredentials){
            return res.status(400).json({"message": "User Does not exist", "success": false})
        } else{
            return res.status(200).json({"message": "User Found", "success": true, "data": userCredentials})
        }
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error", "success": false})
    } 
}
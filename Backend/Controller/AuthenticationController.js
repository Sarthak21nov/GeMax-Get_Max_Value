import CustData from "../Models/CustData.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const SignIn = async (req, res)=>{
    const { Email, Password } = req.body 
    if( !Email || !Password){
        return res.status(400).json({"message": "All fields are Mandatory"})
    }
    try{
        const userCredentials = await CustData.findOne({Email: Email})
        if(!userCredentials){
            return res.status(400).json({"message": "User Does not exist"})
        } 
        else{
            const userPassword = bcrypt.compare(Password, userCredentials.Password)
            if(!userPassword){
                return res.status(400).json({"message": "Invalid Email ID or Password"})
            } else{
                const token = jwt.sign({id: userCredentials._id}, process.env.JWT_SECRET)

                res.cookie('auth_token', token, {
                    httpOnly: true,  // Prevent client-side JavaScript from accessing the cookie
                    secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                    sameSite: 'strict', // Protect against CSRF
                    maxAge: 72* 60 * 60 * 1000, // 72 hour in milliseconds
                });

                return res.status(200).json({"message": "Logged In Successfully", "AuthToken": token, "CustomerID": userCredentials._id})
            }
        }
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}

export const SignUp = async (req,res)=>{
    const { Name, PhoneNumber, Email, Gender, Password } = req.body
    if( !Name || !PhoneNumber || !Email || !Gender || !Password ){
        return res.status(400).json({"message": "All fields are Mandatory"})
    }
    
    const profilePicturePath = req.file ? `/uploads/${req.file.filename}` : null;
    console.log(req.file)

    try{
        const userExist = await CustData.findOne({Email})
        if(userExist){
            return res.status(400).json({"message": "User Already Exist"})
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
        return res.status(200).json({"message": "Registration completed successfully"})
    } catch(err){
        return res.status(500).json({"message": "Internal Server Error"})
    }
}
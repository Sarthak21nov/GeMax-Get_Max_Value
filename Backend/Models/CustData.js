import mongoose from 'mongoose'

const CustomerData = mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    PhoneNumber:{
        type:Number,
        required: true,
    },
    EmailId:{
        type: String,
        required: true,
    },
    Gender:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true,
    },
    ProfilePic:{
        
    }
})

const CustData = mongoose.model('CustData', CustomerData)

export default CustData

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
    Email:{
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
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    }
})

const CustData = mongoose.model('CustData', CustomerData)

export default CustData

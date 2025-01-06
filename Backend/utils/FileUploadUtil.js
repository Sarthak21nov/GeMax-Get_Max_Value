import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req,file,cb)=>{
        const uniqueFileName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueFileName)
    }
})

const FileFilter = (req,file,cb)=>{
    const allowedFileType = /\.jpeg|\.jpg|\.png/
    const FileExtension = allowedFileType.test(path.extname(file.originalname).toLowerCase())
    const MimeType = allowedFileType.test(file.mimetype)

    if(FileExtension && MimeType){
        cb(null, true)
    } else{
        cb(new Error('Only .jpeg, .jpg, .png files are allowed'), false)
    }
}

const upload = multer({
    storage,
    limits: {fileSize: 2 * 1024 * 1024},
    FileFilter
})

export default upload
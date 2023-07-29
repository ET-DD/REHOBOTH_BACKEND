import multer from "multer";

const DIR = "./uploads/"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
}); 

const fileFilter =  (req, file, cb ) =>{
    if(file.mimetype === "image/jepg" || file.mimetype === "image/jpg" || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        //reject file 
        cb({message: "Unsupported file format"}, false)
    }
}

export const upload = multer({
    storage:storage, 
    limits:{fileSize: 1024 * 1024}, 
    fileFilter:fileFilter
})


// import multer from "multer";

// const multerStorage = multer.diskStorage({
//   destination: (request, file, callback) => {
//     callback(null, __dirname);
//   },

//   filename: (request, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// export const multerUpload = multer({ storage: multerStorage });
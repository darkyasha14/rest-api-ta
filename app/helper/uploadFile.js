const multer = require('multer');

// function untuk membuat title image dalam format nama-file.png
const titleImg = (title) => {
    var resTitle = ''
    title.substring(0, 19).split(' ').forEach(element => {
        resTitle += `${element}-`
    });

    console.log("title image : ", resTitle.substring(0, resTitle.length - 1))
    return resTitle.substring(0, resTitle.length - 1)
}


// Upload img
const uploadImg = (file) => {
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, './tmp/')
        },
        filename: (req, file, cb) => {
          cb(null, file.fieldname + '-' + Date.now())
        }
    });
    
    // var upload = multer({ dest: './public/assets/img/upload/' })
    // var upload = multer({storage: storage}).single('file');     // file is req name
    var upload = multer({storage: storage})

    return upload.single(file)
}


module.exports = {titleImg, uploadImg}

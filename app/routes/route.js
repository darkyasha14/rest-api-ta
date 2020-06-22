const {Router} = require("express")
const multer = require('multer')

const router = Router()

const controllerUser = require('../controllers/controllers-user')
const controllersHotel = require('../controllers/controllers-hotel')
const controllersCategory = require('../controllers/controllers-category')
const controllersSubCategory = require('../controllers/controllers-sub_category')
const controllersJasa = require('../controllers/controllers-jasa')

const isAuthenticate = require('../middlewares/verify-token')
const auth = require('../middlewares/authenticate')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './../tmp/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({storage: storage})

router.post('/auth/', auth.login)

router.get('/user/:id',     isAuthenticate, controllerUser.getUserById)
router.get('/user/',        isAuthenticate, controllerUser.getAllUser)
router.post('/user',        controllerUser.createNewUser)
router.put('/user/:id',     controllerUser.updateUser)
router.delete('/user/:id',  controllerUser.delelteUser)

router.get('/hotel/',       controllersHotel.getAllRomm)
router.get('/hotel/:id',    controllersHotel.getRoomById)
router.post('/hotel/',      controllersHotel.createNewRoom)
router.put('/hotel/:id',    controllersHotel.updateRoom)
router.delete('/hotel/:id', controllersHotel.deleteRoom)

router.get('/category/',    controllersCategory.getCategorylist)
router.get('/category/:id', controllersCategory.getCategoryById)
router.post('/category/',   controllersCategory.createCategory)
router.put('/category/:id', controllersCategory.updateCategory)

router.get('/sub-category/',    controllersSubCategory.getSubCategorylist)
router.get('/sub-category/:id', controllersSubCategory.getSubCategoryById)
router.post('/sub-category/',      upload.single("img_url"), controllersSubCategory.createSubCategory)
router.put('/sub-category/:id',     controllersSubCategory.updateSubCategory)

router.get('/jasa/',        controllersJasa.getJasalist)
router.get('/jasa/:id',     controllersJasa.getJasaById)
router.post('/jasa/',       controllersJasa.createJasa)
router.put('/jasa/:id',     controllersJasa.updateJasa)






module.exports = router
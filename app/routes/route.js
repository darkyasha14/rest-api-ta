const {Router} = require("express")

const router = Router()

const controllerUser = require('../controllers/controllers-user')
const controllersHotel = require('../controllers/controllers-hotel')
const controllersCategory = require('../controllers/controllers-category')
const controllersSubCategory = require('../controllers/controllers-sub_category')

const isAuthenticate = require('../middlewares/verify-token')
const auth = require('../middlewares/authenticate')

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
router.post('/sub-category/',   controllersSubCategory.createSubCategory)
router.put('/category/:id',     controllersSubCategory.updateSubCategory)



module.exports = router
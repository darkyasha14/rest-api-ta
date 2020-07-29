const {Router} = require("express")
const upload = require('../../app/helper/uploadFile')

const router = Router()

const controllerUser = require('../controllers/controllers-user')
const controllersHotel = require('../controllers/controllers-hotel')
const controllersCategory = require('../controllers/controllers-category')
const controllersSubCategory = require('../controllers/controllers-sub_category')
const controllersJasa = require('../controllers/controllers-jasa')
const controllersPayment= require('../controllers/controllers-payment')
const controllerconfirmPayment= require('../controllers/controllers-confirm_payment')
const controllersTransactionComplate= require('../controllers/controllers-transaction_complate')

const isAuthenticate = require('../middlewares/verify-token')
const auth = require('../middlewares/authenticate')
const controllersUser_profil = require("../controllers/controllers-user_profil")
const controllersBooking = require("../controllers/controllers-booking")


router.post('/auth/', auth.login)

router.get('/user/:id',     isAuthenticate, controllerUser.getUserById)
router.get('/user/',        isAuthenticate, controllerUser.getAllUser)
router.post('/user',        controllerUser.createNewUser)
router.put('/user/:id',     controllerUser.updateUser)
router.delete('/user/:id',  controllerUser.delelteUser)
router.get('/user/activate-account/:id', controllerUser.activateAccount)

router.get('/hotel/',       controllersHotel.getAllRomm)
router.get('/hotel/:id',    controllersHotel.getRoomById)
router.post('/hotel/',      controllersHotel.createNewRoom)
router.put('/hotel/:id',    controllersHotel.updateRoom)
router.delete('/hotel/:id', controllersHotel.deleteRoom)

router.get('/category/',    controllersCategory.getCategorylist)
router.get('/category/:id', controllersCategory.getCategoryById)
router.post('/category/',   controllersCategory.createCategory)
router.put('/category/:id', controllersCategory.updateCategory)
router.delete('/category/:id', controllersCategory.deleteCategory)

router.get('/sub-category/',    controllersSubCategory.getSubCategorylist)
router.get('/sub-category/:id', controllersSubCategory.getSubCategoryById)
router.post('/sub-category/',      upload.uploadImg('img_url'), controllersSubCategory.createSubCategory)
router.put('/sub-category/:id',    upload.uploadImg('img_url'), controllersSubCategory.updateSubCategory)
router.delete('/sub-category/:id', controllersSubCategory.deleteSubCategory)

router.get('/jasa/',        controllersJasa.getJasalist)
router.get('/jasa/:id',     controllersJasa.getJasaById)
router.post('/jasa/',       controllersJasa.createJasa)
router.put('/jasa/:id',     controllersJasa.updateJasa)
router.delete('/delete-jasa/:id', controllersJasa.deleteJasa)

router.get('/profil/', isAuthenticate, controllersUser_profil.getProfilDetail)
router.get('/profil/:id', isAuthenticate, controllersUser_profil.getProfilbuUserID)
router.post('/add-profil/',  upload.uploadImg('user_img'), isAuthenticate, controllersUser_profil.createProfil)

router.post('/booking/', isAuthenticate, controllersBooking.createNewBooking)
router.post('/booking-list/:id', isAuthenticate, controllersBooking.getBookingList)
router.get('/booking-all-list/', isAuthenticate, controllersBooking.getAllBookingList)
router.get('/booking/:invoice_no', controllersBooking.updatePaymentStatus)

router.post('/payment/',  isAuthenticate, controllersPayment.createPayment)

router.post('/confirm-payment/', upload.uploadImg('img_pay'), controllerconfirmPayment.confirmPayment)

router.post('/payment-complate-list/:id', controllersTransactionComplate.transactionComplateList)
router.post('/payment-complate-list/', controllersTransactionComplate.transactionComplateAllList)







module.exports = router
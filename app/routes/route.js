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

router.get('/user/:id',    isAuthenticate, controllerUser.getUserById)
router.get('/user/',       isAuthenticate, controllerUser.getAllUser)
router.post('/user',       controllerUser.createNewUser)
router.put('/user/:id',    isAuthenticate, controllerUser.updateUser)
router.delete('/user/:id', isAuthenticate, controllerUser.delelteUser)
router.get('/user/activate-account/:id', controllerUser.activateAccount)
router.post('/super-user/',     isAuthenticate,   controllerUser.createAdmin)

router.get('/hotel/',       controllersHotel.getAllRomm)
router.get('/hotel/:id',    controllersHotel.getRoomById)
router.post('/hotel/',      controllersHotel.createNewRoom)
router.put('/hotel/:id',    controllersHotel.updateRoom)
router.delete('/hotel/:id', controllersHotel.deleteRoom)

router.get('/category/',   isAuthenticate, controllersCategory.getCategorylist)
router.get('/category/:id',isAuthenticate, controllersCategory.getCategoryById)
router.post('/category/',  isAuthenticate, controllersCategory.createCategory)
router.put('/category/:id',isAuthenticate, controllersCategory.updateCategory)
router.delete('/category/:id',isAuthenticate, controllersCategory.deleteCategory)

router.get('/sub-category/',    isAuthenticate,controllersSubCategory.getSubCategorylist)
router.get('/sub-category/:id', isAuthenticate,controllersSubCategory.getSubCategoryById)
router.post('/sub-category/',    isAuthenticate,  upload.uploadImg('img_url'), controllersSubCategory.createSubCategory)
router.put('/sub-category/:id',   isAuthenticate, upload.uploadImg('img_url'), controllersSubCategory.updateSubCategory)
router.delete('/sub-category/:id',isAuthenticate, controllersSubCategory.deleteSubCategory)

router.get('/jasa/',       isAuthenticate, controllersJasa.getJasalist)
router.get('/jasa/:id',    isAuthenticate, controllersJasa.getJasaById)
router.post('/jasa/',      isAuthenticate, controllersJasa.createJasa)
router.put('/jasa/:id',    isAuthenticate, controllersJasa.updateJasa)
router.delete('/jasa/:id', isAuthenticate,controllersJasa.deleteJasa)

router.get('/profil/', isAuthenticate,controllersUser_profil.getProfilDetail)
router.get('/profil/:id',  isAuthenticate,controllersUser_profil.getProfilbuUserID)
router.post('/add-profil/',  upload.uploadImg('user_img'), controllersUser_profil.createProfil)
router.put('/update-profil/:id', isAuthenticate, upload.uploadImg('user_img'), controllersUser_profil.updateProfil)
router.post('/delete-profil-picture/', isAuthenticate, controllersUser_profil.deleteProfilePicture)

router.post('/booking/',  isAuthenticate,controllersBooking.createNewBooking)
router.get('/booking-list/', isAuthenticate, controllersBooking.getAllBookingList)
router.get('/booking-detail/:invoice_no', isAuthenticate, controllersBooking.getBookingByInvoice)
router.get('/booking-list/:user_id', isAuthenticate, controllersBooking.getBookingListByUserId)
router.post('/booking-update-status/', isAuthenticate,controllersBooking.updatePaymentStatus)

router.post('/payment/', isAuthenticate, controllersPayment.createPayment)

router.post('/confirm-payment/',isAuthenticate, upload.uploadImg('img_pay'), controllerconfirmPayment.confirmPayment)
router.get('/confirm-payment-list/',isAuthenticate, controllerconfirmPayment.getConfirmPaymentList)
// router.get('/confirm-payment-list/:id', controllerconfirmPayment.getConfirmPaymentByUserId)
router.get('/confirm-payment-detail/:invoice_no',isAuthenticate, controllerconfirmPayment.getConfirmPaymentDetail)

router.get('/transaction-complate-list/:id',isAuthenticate, controllersTransactionComplate.transactionComplateListByUserId)
router.get('/transaction-complate-list/',isAuthenticate, controllersTransactionComplate.transactionComplateList)
router.get('/transaction-complate-detail/:invoice_no',isAuthenticate, controllersTransactionComplate.transactionComplateListByInvoiceNo)







module.exports = router
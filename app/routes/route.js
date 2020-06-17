const {Router} = require("express")

const router = Router()

const controllerUser = require('../controllers/controllers-user')
const controllersHotel = require('../controllers/controllers-hotel')

const isAuthenticate = require('../middlewares/verify-token')
const auth = require('../middlewares/authenticate')

router.post('/auth/', auth.login)

router.get('/user/:id', isAuthenticate, controllerUser.getUserById)
router.get('/user/', isAuthenticate, controllerUser.getAllUser)
router.post('/user', controllerUser.createNewUser)
router.put('/user/:id', controllerUser.updateUser)
router.delete('/user/:id', controllerUser.delelteUser)
router.get('/hotel/', controllersHotel.getAllRomm)
router.get('/hotel/:id', controllersHotel.getRoomById)
router.post('/hotel/', controllersHotel.createNewRoom)
router.put('/hotel/:id', controllersHotel.updateRoom)
router.delete('/hotel/:id', controllersHotel.deleteRoom)


module.exports = router
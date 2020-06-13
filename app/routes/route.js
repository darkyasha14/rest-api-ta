const {Router} = require("express")

const router = Router()
const controllerUser = require('../controllers/controllers-user')


router.get('/user/:id', controllerUser.getUserById)
router.get('/user/', controllerUser.getAllUser)
router.post('/user', controllerUser.createNewUser)

module.exports = router
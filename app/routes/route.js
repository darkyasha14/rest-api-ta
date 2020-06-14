const {Router} = require("express")

const router = Router()
const controllerUser = require('../controllers/controllers-user')


router.get('/user/:id', controllerUser.getUserById)
router.get('/user/', controllerUser.getAllUser)
router.post('/user', controllerUser.createNewUser)
router.put('/user/:id', controllerUser.updateUser)
router.delete('/user/:id', controllerUser.delelteUser)


module.exports = router
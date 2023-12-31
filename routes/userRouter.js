const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authorization = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authorization,  userController.check)

module.exports = router
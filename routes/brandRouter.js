const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()

router.post('/', brandController.creat)
router.get('/', brandController.getAll)


module.exports = router
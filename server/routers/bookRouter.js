const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole("ADMIN"), bookController.create)
router.get('/',bookController.getAll)
router.get('/:id', bookController.getOne)
router.delete('/', checkRole("ADMIN"), bookController.destroy)

module.exports = router
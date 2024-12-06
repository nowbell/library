const Router = require('express')
const router = new Router()

const bookRouter = require('./bookRouter')
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/book', bookRouter)

module.exports = router

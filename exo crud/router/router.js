
const express = require("express")
const router = express.Router()
const controller = require ("../controller/controller")
const middleware = require("../middleware/middleware")

router.use( express.json() )
router.use(middleware.pathOk)
router.use(middleware.lateTime)
//router.use("/users", middleware.ageIsCorrect)
  
router.get('/users', controller.index)
router.get('/search/:name', controller.search)
router.get('/users/:id', controller.show)
router.post('/users', controller.create)
router.put('/users', controller.update)
router.delete('/users', controller.destroy)

module.exports = router


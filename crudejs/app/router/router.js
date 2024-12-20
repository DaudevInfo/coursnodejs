
const express = require("express")
const router = express.Router()
const controller = require ("../controller/controller")
const middleware = require("../middleware/middleware")

router.use( express.json() )
router.use(middleware.pathOk)
// Plus d'itérêt de mettre une latence
// router.use(middleware.lateTime)
//router.use("/users", middleware.ageIsCorrect)
  
router.get('/users', controller.index)
router.get('/search/:name', controller.search)
router.get('/users/:id', controller.show)
router.post('/users/new', controller.create)
router.post('/users/update/:id', controller.update)
router.post('/users/delete/:id', controller.destroy)

module.exports = router


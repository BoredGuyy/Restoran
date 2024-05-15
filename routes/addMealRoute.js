const express = require('express')
const router = express.Router()

const {addMealPage, newMeal} = require('../controllers/addMealController')
const upload = require('../middlewares/multer')

router.route('/').get(addMealPage).post(upload.single('url_image'), newMeal)

module.exports = router
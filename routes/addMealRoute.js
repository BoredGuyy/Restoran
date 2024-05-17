const express = require('express')
const router = express.Router()

const {addMealPage, newMeal} = require('../controllers/addMealController')
const upload = require('../middlewares/multer')
const validate = require('../middlewares/validation')

router.route('/').get(addMealPage).post(upload.single('url_image'), validate, newMeal)

module.exports = router
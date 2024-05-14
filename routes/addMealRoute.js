const express = require('express')
const router = express.Router()

const {addMealPage, newMeal} = require('../controllers/addMealController')

router.route('/').get(addMealPage).post(newMeal)

module.exports = router
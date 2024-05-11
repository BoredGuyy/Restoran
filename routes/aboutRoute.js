const express = require('express')
const router = express.Router()

const getAboutPage = require('../controllers/aboutController')

router.route('/').get(getAboutPage)

module.exports = router
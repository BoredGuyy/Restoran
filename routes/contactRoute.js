const express = require('express')
const router = express.Router()

const getContactPage = require('../controllers/contactController')

router.route('/').get(getContactPage)

module.exports = router
const express = require('express')
const router = express.Router()

const sendEmail = require('../controllers/newLetterController')

router.route('/').post(sendEmail)

module.exports = router;
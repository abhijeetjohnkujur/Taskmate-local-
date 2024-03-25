const express = require('express')
const router = express.Router()

//controllers
const homecontroller = require('../controllers/homecontroller')

// Home Page
router.get('/', homecontroller.home)

module.exports = router
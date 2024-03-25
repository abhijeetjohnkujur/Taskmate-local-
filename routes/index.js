const express = require('express')
const router = express.Router()

//controllers
const homecontroller = require('../controllers/homecontroller')

// Home Page Route
router.get('/', homecontroller.home)

// Add Task Route
router.post('/add-todo', homecontroller.addTodo)

module.exports = router
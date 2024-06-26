const express = require('express');
const router = express.Router();

// Home Controller
const homecontroller = require('../controllers/homecontroller');

// Home Page Route
router.get('/', homecontroller.home);

// Add Task Route
router.post('/add-todo', homecontroller.addTodo);

// Delete single and Multiple Tasks Route
router.get('/delete-todo/:id', homecontroller.deleteTodo);


module.exports = router;
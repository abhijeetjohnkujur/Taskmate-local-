const todoList = require('../models/todo')
const formatedDate = require('../utils/date_function')

// Home controller + View Tasks
module.exports.home = (req, res) => {
    todoList.find()
        .then(result => {
            // console.log(result)
            return res.render('home', {
            title: "TaskMate | TodoList App",
            tasks: result,
            })
        })
        .catch(err => {
            console.log(err)
            return res.redirect('back')
        })
}

// Add Task controller
module.exports.addTodo = (req, res) => {
    const {
        task,
        category,
        duedate
    } = req.body
    
    const formatedduedate = formatedDate(duedate)
    todoList.create({
            task,
            category,
            duedate: formatedduedate
        })
        .then(result => {
            console.log(result)
            return res.redirect('back')
        })
        .catch(err => {
            console.log(err)
            return res.redirect('back')
        })
}
const todoList = require('../models/todo')

module.exports.home = (req,res) => {
    return res.render('home', {
        title: "TaskMate | TodoList App"
    })
}

// Add Task controller
module.exports.addTodo = (req,res) => {
    const {task, category, duedate} = req.body
    todoList.create({
        task,
        category,
        duedate
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

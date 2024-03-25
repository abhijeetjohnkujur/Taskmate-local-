const todoList = require('../models/todo')

module.exports.home = (req,res) => {
    return res.render('home', {
        title: "TaskMate | TodoList App"
    })
}

module.exports.addTodo = (req,res) => {
    todoList.create({
        task: req.body.task,
        category: req.body.category,
        duedate: req.body.duedate
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
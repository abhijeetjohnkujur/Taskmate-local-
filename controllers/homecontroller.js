const todoList = require('../models/todo');
const formatedDate = require('../utils/date_function');

// Home controller + View Tasks
module.exports.home = async (req, res) => {
    try {
        const result = await todoList.find();
        return res.render('home', {
            title: "TaskMate | TodoList App",
            tasks: result,
        });
    } catch (err) {
        return res.redirect('back');
    }
};

// Add Task controller
module.exports.addTodo = async (req, res) => {
    try {
        const { task, category, duedate } = req.body;
        const formatedduedate = formatedDate(duedate);

        await todoList.create({
            task,
            category,
            duedate: formatedduedate,
        });

        return res.redirect('back');
    } catch (err) {
        return res.redirect('back');
    }
};

// Delete Task controller
module.exports.deleteTodo = async (req, res) => {
    try {
        const ids = req.params.id.split(',');
        await todoList.deleteMany({ _id: { $in: ids } });
        return res.redirect('back');
    } catch (err) {
        return res.status(500).send("Internal Server Error");
    }
};


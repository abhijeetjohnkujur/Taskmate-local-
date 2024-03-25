const mongoose = require('mongoose');
const { Schema }  = mongoose;

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    duedate: {
            type: String,
            required: true
    }
});

module.exports = mongoose.model('todoList', todoSchema)
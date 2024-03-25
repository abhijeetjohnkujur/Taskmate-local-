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
            type: Date,
            required: true
    }
});

module.exports = mongoose.model('todoList', todoSchema)
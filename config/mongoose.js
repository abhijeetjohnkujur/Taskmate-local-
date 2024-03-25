const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

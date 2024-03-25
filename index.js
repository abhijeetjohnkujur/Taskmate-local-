const express = require("express");
const app = express();
const port = 8000;

// Setting up the root route
app.use('/', require('./routes/index'))

// Setting up the view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Setting up the assets folder
app.use(express.static('assets'))

//Starting up the server
app.listen(port,(err) => err ? console.log(err) : console.log(`server is running on port ${port}`))
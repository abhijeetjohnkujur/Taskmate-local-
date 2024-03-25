const express = require("express");
const app = express();
const port = 8000;





app.listen(port,(err) => err ? console.log(err) : console.log(`server is running on port ${port}`))
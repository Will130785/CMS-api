require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.DB_CONNECT;
const mongoConnect = require("./dbconnect");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Connect to database
mongoConnect(MONGO_DB);

//Router
require("./routes/index")(app);

//Start server
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});
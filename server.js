//Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.DB_CONNECT;
const mongoConnect = require("./dbconnect");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

//CORS
app.use(cors());

//BODY PARSER CONFIG
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

//Connect to database
mongoConnect(MONGO_DB);

//Passport config
app.use(passport.initialize());

require("./passport/index")(passport);

// app.use(require("express-session")({
//     secret: "This is a test",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser);

//Router
require("./routes/index")(app);

//Start server
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});
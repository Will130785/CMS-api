const mongoose = require("mongoose");

//Connect to database
const dbConnect = function(connect){
    console.log(connect)
    mongoose.connect(connect, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    //Check connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("Connected to database");
    });

}

module.exports = dbConnect;
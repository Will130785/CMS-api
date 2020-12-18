//helper functions


//get requests
module.exports.getData = async function(model){
    try {
        await console.log("You made a GET request");

        model.find({}, (err, allEvents) => {
            if(!err){
                console.log(allEvents);
            } else {
                console.log(err)
            };
        });
    } catch(err){
        console.log(err);
    }
};

//Post requests
module.exports.setData = async function(model, data){
    try {
        await console.log("You made a POST request");

        model.create(data, (err, newEvent) => {
            if(!err){
                console.log(newEvent);
            } else {
                console.log(err);
            };
        });
    } catch(err) {
        console.log(err);
    };
}
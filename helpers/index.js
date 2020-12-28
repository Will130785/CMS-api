//helper functions
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../config/keys").secret;


//get requests
module.exports.getData = async function(model, req, res){
    try {
        await console.log("You made a GET request");

        model.find({}, (err, allEvents) => {
            if(!err){
                console.log(allEvents);
                res.send(allEvents);
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

//Delete requests
module.exports.deleteData = async function(model, id){
    try {
        await console.log("You made a DELETE request");

        model.findByIdAndRemove(id, (err, foundEvent) => {
            if(!err){
                console.log("You want to delete a record")
            } else {
                console.log(err);
            }
        })
    } catch(err) {
        console.log(err)
    }
}

//Auth helpers
module.exports.registerUser = async function(model, data, req, res){
    // let ( ) = req.body

    console.log(data);

    try {
        if(data.password !== data.confirmPassword) {
            return res.status(400).json({
                msg: "Passwords do not match"
            });
        } else {
            //Check for unique user
            model.findOne({
                username: data.username
            }).then(user => {
                if(user){
                    console.log("Usermame is already taken");
                    return res.status(400).json({
                        msg: "Username is already taken"
                    })
                }
            });
    
            //Data is valid and now we can register user
            let newUser = new model(data);
    
            //Hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        return res.status(201).json({
                            success: true,
                            msg: "User is now registered"
                        });
                    });
                });
            });
        };

    } catch(err) {
        console.log(err)
    }
    
    // let newUser = new model({username: data.username,});
    // model.register(newUser, data.password, (err, user) => {
    //     if(!err) {
    //         console.log("User added")
    //     } else {
    //         console.log("err")
    //     }
    // });
}

module.exports.loginUser = async function(model, data, req, res){


        try {
            model.findOne({username: data.username}).then(user => {
                if(!user) {
                    console.log("No user found")
                    return res.status(404).json({
                        msg: "Username not found",
                        success: false
                    })
                }
    
                //If ther is a user we will compare the password
                bcrypt.compare(data.password, user.password).then(isMatch => {
                    if(isMatch){
                        //Users password is correct and we send the json token for that user
                        const payload = {
                            _id: user._id,
                            username: user.username 
                        }
    
                        jwt.sign(payload, key, {
                            expiresIn: 604800
                        }, (err, token) => {
                            res.status(200).json({
                                success: true,
                                user: user,
                                token: `Bearer ${token}`,
                                msg: "You are now logged in"
                            })
                        })
                        console.log("You are now logged in")
                    } else {
                        console.log("Incorrect password")
                        return res.status(404).json({
                            msg: "Incorrect Password",
                            success: false
                        })
                    }
                })
            })

        } catch(err) {
            console.log(err)
        }
        
    // try {
    //     await console.log("You made a POST request");

    //     model.create(data, (err, newEvent) => {
    //         if(!err){
    //             console.log(newEvent);
    //         } else {
    //             console.log(err);
    //         };
    //     });
    // } catch(err) {
    //     console.log(err);
    // };
    console.log("You are trying to log in");
}
const middlewareObj = {
    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next()
        }
        console.log("You need to be logged in")
    }
}

module.exports = middlewareObj;
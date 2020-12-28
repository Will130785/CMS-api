const ctrl = require("../controllers/index");
const middleware = require("../middleware/index");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = function(app){
        //Get requests
        app.get("/events", passport.authenticate("jwt", {session: false}), ctrl.getEvents);
        app.get("/gallery", passport.authenticate("jwt", {session: false}), ctrl.getGallery);
        app.get("/menus", passport.authenticate("jwt", {session: false}), ctrl.getMenus);
        app.get("/profile", passport.authenticate("jwt", {session: false}), ctrl.getProfile);
        app.get("/testimonials", passport.authenticate("jwt", {session: false}), ctrl.getTestimonials);
        app.get("/users", passport.authenticate("jwt", {session: false}), ctrl.getUsers);
        app.get("/vacancies", passport.authenticate("jwt", {session: false}), ctrl.getVacancies);
        app.get("/venues", passport.authenticate("jwt", {session: false}), ctrl.getVenues);

        //Post requests
        app.post("/login", ctrl.login);
        app.post("/events", ctrl.setEvents);
        app.post("/gallery", ctrl.setGallery);
        app.post("/menus", ctrl.setMenus);
        app.post("/profile", ctrl.setProfile);
        app.post("/testimonials", ctrl.setTestimonials);
        app.post("/users", ctrl.setUsers);
        app.post("/vacancies", ctrl.setVacancies);
        app.post("/venues", ctrl.setVenues);

        //Delete requests
        app.delete("/events/:id", ctrl.deleteEvents);
        app.delete("/gallery/:id", ctrl.deleteGallery);
        app.delete("/menus/:id", ctrl.deleteMenus);
        app.delete("/profile/:id", ctrl.deleteProfile);
        app.delete("/testimonials/:id", ctrl.deleteTestimonials);
        app.delete("/users/:id", ctrl.deleteUsers);
        app.delete("/vacancies/:id", ctrl.deleteVacancies);
        app.delete("/venues/:id", ctrl.deleteVenues);
        
    }
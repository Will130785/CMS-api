const ctrl = require("../controllers/index");

// module.exports = router;

module.exports = function(app){
        //Get requests
        app.get("/events", ctrl.getEvents);
        app.get("/gallery", ctrl.getGallery);
        app.get("/menus", ctrl.getMenus);
        app.get("/profile", ctrl.getProfile);
        app.get("/testimonials", ctrl.getTestimonials);
        app.get("/users", ctrl.getUsers);
        app.get("/vacancies", ctrl.getVacancies);
        app.get("/venues", ctrl.getVenues);

        //Post requests
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
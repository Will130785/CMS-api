const helpers = require("../helpers/index");
const Event = require("../models/event");
const Gallery = require("../models/gallery");
const Menu = require("../models/menu");
const Profile = require("../models/profile");
const Testimonial = require("../models/testimonial");
const User = require("../models/user");
const Vacancy = require("../models/vacancy");
const Venue = require("../models/venue");

//GET REQUESTS
module.exports.getEvents = async (req, res, next) => {
    helpers.getData(Event, req, res)
    
};

module.exports.getGallery = async (req, res, next) => {
    helpers.getData(Gallery, req, res);
};

module.exports.getMenus = async (req, res, next) => {
    helpers.getData(Menu, req, res);
};

module.exports.getProfile = async (req, res, next) => {
    helpers.getData(Profile, req, res);
};

module.exports.getTestimonials = async (req, res, next) => {
    helpers.getData(Testimonial, req, res);
};

module.exports.getUsers = async (req, res, next) => {
    helpers.getData(User, req, res);
};

module.exports.getVacancies = async (req, res, next) => {
   helpers.getData(Vacancy, req, res);
};

module.exports.getVenues = async (req, res, next) => {
    helpers.getData(Venue, req, res);
};

//POST REQUESTS
module.exports.login = async (req, res, next) => {
    const data = req.body;

    helpers.loginUser(User, data, req, res)
}

module.exports.setEvents = async (req, res, next) => {
    //Get data
    const data = req.body;

    helpers.setData(Event, data);
};

module.exports.setGallery = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Gallery, data);
};

module.exports.setMenus = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Menu, data);
};

module.exports.setProfile = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Profile, data);
};

module.exports.setTestimonials = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Testimonial, data);
};

module.exports.setUsers = async (req, res, next) => {
    const data = req.body;

    helpers.registerUser(User, data, req, res);
    
};

module.exports.setVacancies = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Vacancy, data);
};

module.exports.setVenues = async (req, res, next) => {
    const data = req.body;

    helpers.setData(Venue, data);
};

//DELETE REQUESTS
module.exports.deleteEvents = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Event, req.params.id)
};

module.exports.deleteGallery = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Gallery, req.params.id)
};

module.exports.deleteMenus = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Menu, req.params.id)
};

module.exports.deleteProfile = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Profile, req.params.id)
};

module.exports.deleteTestimonials = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Testimonial, req.params.id)
};

module.exports.deleteUsers = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(User, req.params.id)
};

module.exports.deleteVacancies = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Vacancy, req.params.id)
};

module.exports.deleteVenues = async (req, res, next) => {
    await console.log("You made a DELETE request");
    helpers.deleteData(Venue, req.params.id)
};
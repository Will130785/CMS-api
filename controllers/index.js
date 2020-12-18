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
    helpers.getData(Event);
};

module.exports.getGallery = async (req, res, next) => {
    helpers.getData(Gallery);
};

module.exports.getMenus = async (req, res, next) => {
    helpers.getData(Menu);
};

module.exports.getProfile = async (req, res, next) => {
    helpers.getData(Profile);
};

module.exports.getTestimonials = async (req, res, next) => {
    helpers.getData(Testimonial);
};

module.exports.getUsers = async (req, res, next) => {
    helpers.getData(User);
};

module.exports.getVacancies = async (req, res, next) => {
   helpers.getData(Vacancy);
};

module.exports.getVenues = async (req, res, next) => {
    helpers.getData(Venue);
};

//POST REQUESTS
module.exports.setEvents = async (req, res, next) => {
    //Test data
    const data = {
        name: "Test event 5",
        date: "20 February 2021",
        time: "8pm",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        description: "Test description about this test event"
        };

    helpers.setData(Event, data);
};

module.exports.setGallery = async (req, res, next) => {
    const data = {
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        description: "Test description about this test image"
        };

    helpers.setData(Gallery, data);
};

module.exports.setMenus = async (req, res, next) => {
    const data = {
        name: "Test event 5",
        menu: "Test menu"
        };

    helpers.setData(Menu, data);
};

module.exports.setProfile = async (req, res, next) => {
    const data = {
        name: "Test event 5",
        photo: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        };

    helpers.setData(Profile, data);
};

module.exports.setTestimonials = async (req, res, next) => {
    const data = {
        name: "Test name",
        date: "15 December 2020",
        testimonial: "Test testimonial"
        };

    helpers.setData(Testimonial, data);
};

module.exports.setUsers = async (req, res, next) => {
    const data = {
        username: "Test",
        password: "test123",
        };

    helpers.setData(User, data);
};

module.exports.setVacancies = async (req, res, next) => {
    const data = {
        title: "Test",
        duties: "Test duties",
        contact: "Mr Test"
        };

    helpers.setData(Vacancy, data);
};

module.exports.setVenues = async (req, res, next) => {
    const data = {
        name: "Test venue",
        subHeading: "Subheading about venue",
        description: "Test description about this venue"
        };

    helpers.setData(Venue, data);
};

//DELETE REQUESTS
module.exports.deleteEvents = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteGallery = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteMenus = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteProfile = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteTestimonials = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteUsers = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteVacancies = async (req, res, next) => {
    await console.log("You made a DELETE request");
};

module.exports.deleteVenues = async (req, res, next) => {
    await console.log("You made a DELETE request");
};
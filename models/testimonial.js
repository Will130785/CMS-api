const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: String,
    date: String,
    testimonial: String
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    time: String,
    imageLink: String,
    description: String,
    link: String,
    status: String
});

module.exports = mongoose.model("Event", eventSchema);
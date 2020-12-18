const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    image: String,
    description: String
});

module.exports = mongoose.model("Gallery", gallerySchema);
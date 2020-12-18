const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
    name: String,
    subHeading: String,
    description: String
});

module.exports = mongoose.model("Venue", venueSchema);
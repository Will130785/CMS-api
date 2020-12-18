const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
    title: String,
    duties: String,
    contact: String
});

module.exports = mongoose.model("Vacancy", vacancySchema);
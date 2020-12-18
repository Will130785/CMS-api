const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    menu: String
});

module.exports = mongoose.model("Menu", menuSchema);
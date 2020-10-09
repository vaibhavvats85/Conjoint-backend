const mongoose = require("mongoose");

const webinarSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    title:{
        type: String,
    },
    time: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("webinars", webinarSchema);

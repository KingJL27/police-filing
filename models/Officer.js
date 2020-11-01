// IMPORTS
const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

// Schema for officers
const Officer = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    badgeNumber: {
        type: String,
        required: true,
        unique: true
    },
    personRecords: [{type: String, ref: "PersonRecord"}]
})

Officer.plugin(uniqueValidator);

module.exports = mongoose.model("Officer", Officer)
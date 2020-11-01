// IMPORTS
const mongoose = require("mongoose")

// Schema for person records
const PersonRecord = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
        ref: "Officer"
    }
})

module.exports = mongoose.model("PersonRecord", PersonRecord)
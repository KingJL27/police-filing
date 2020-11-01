// IMPORTS
const mongoose = require("mongoose")

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
        required: true
    },
    personRecords: [{type: String, ref: "PersonRecord"}]
})

module.exports = mongoose.model("Officer", Officer)
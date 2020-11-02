// IMPORTS
const mongoose = require("mongoose")

// Schema for offenses
const Offense = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    hidden: {
        type: Boolean,
        default: false
    },
    offenders: [{ type: Number }]
})

module.exports = mongoose.model("Offense", Offense)
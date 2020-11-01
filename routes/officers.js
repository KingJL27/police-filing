const express = require("express")
const router = express.Router()
const Record = require("../models/PersonRecord")
const Officer = require("../models/Officer")
const mongoose = require("mongoose")

// @desc    Get All Records
// @route   GET /records
router.get("/", async (req, res) => {
    try {
        const officers = await Officer.find().populate("personRecords")
        res.status(200).json(officers)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router
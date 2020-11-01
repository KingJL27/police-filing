const express = require("express")
const router = express.Router()
const Record = require("../models/PersonRecord")
const Officer = require("../models/Officer")
const mongoose = require("mongoose")

// @desc    Get All Officers
// @route   GET /officers
router.get("/", async (req, res) => {
    try {
        const officers = await Officer.find().populate("personRecords")
        res.status(200).json(officers)
    } catch (error) {
        res.json({ message: error })
    }
})

// @desc    Create Single Officers
// @route   POST /officers
router.post("/", async (req, res) => {
    const officer = new Officer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        badgeNumber: req.body.badgeNumber
    })

    console.log(req.body.firstName, req.body.lastName)

    try {
        const savedOfficer = await officer.save()
        res.json(savedOfficer)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router
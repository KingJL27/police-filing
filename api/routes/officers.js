const express = require("express")
const router = express.Router()
const Officer = require("../models/Officer")
const mongoose = require("mongoose")

// @desc    Get All Officers
// @route   GET /officers
router.get("/", async (req, res) => {
    try {
        const officers = await Officer.find()
        res.status(200).json(officers)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Get Single Officers
// @route   GET /officers/:badgeNumber
router.get("/:badgeNumber", async (req, res) => {
    try {
        const officer = await Officer.findOne({ badgeNumber: req.params.badgeNumber})
        res.status(200).json(officer)
    } catch (error) {
        res.status(400).json({ message: error })
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
        res.status(201).json(savedOfficer)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

module.exports = router
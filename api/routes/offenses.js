const express = require("express")
const router = express.Router()
const Officer = require("../models/Officer")
const Offense = require("../models/Offense")
const mongoose = require("mongoose")

// @desc    Get All Offenses
// @route   GET /offenses
router.get("/", async (req, res) => {
    try {
        const offense = await Offense.find()
        res.status(200).json(offense)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Get Single Offense
// @route   GET /offense:id
router.get("/:id", async (req, res) => {
    try {
        const offense = await Offense.findOne({ id: req.params.id })
        res.status(200).json(offense)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Create Single Offense
// @route   POST /offense
router.post("/", async (req, res) => {
    const id = await Offense.countDocuments() + 1
    const offenders = req.body.offenders

    offenders.forEach(offender => {
        console.log(offender)
    });
    
    const offense = new Offense({
        id: id,
        offenders: req.body.offenders
    })

    try {
        const savedOffense = await offense.save()
        res.status(201).json(savedOffense)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

module.exports = router
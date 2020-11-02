// IMPORTS
const express = require("express")
const router = express.Router()
const Record = require("../models/PersonRecord")
const Officer = require("../models/Officer")
const mongoose = require("mongoose")

// @desc    Get All Records
// @route   GET /records
router.get("/", async (req, res) => {
    try {
        const records = await Record.find()
        res.status(200).json(records)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Get Single Record
// @route   GET /records/:firstName
router.get("/:firstName&:lastName", async (req, res) => {
    try {
        const record = await Record.findOne({ firstName: req.params.firstName, lastName: req.params.lastName })
        res.status(200).json(record)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Create Single Record
// @route   POST /records
router.post("/", async (req, res) => {
    const creator = await Officer.findOne( {badgeNumber: req.body.creator} )
    if(!creator) return res.status(404).json({ message: "Officer Not Found" })
    
    const c = await Record.countDocuments() + 1

    const record = new Record({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        creator: creator.badgeNumber,
        id: c
    })

    creator.personRecords.push(c)
    await creator.save()
    console.log(creator.personRecords)

    savedRecord = await record.save()
    res.status(201).json(savedRecord)
})

module.exports = router
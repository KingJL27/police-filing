// IMPORTS
const express = require("express")
const router = express.Router()
const PersonRecord = require("../models/PersonRecord")
const Officer = require("../models/Officer")
const mongoose = require("mongoose")

// @desc    Get All Records
// @route   GET /records
router.get("/", async (req, res) => {
    try {
        const records = await PersonRecord.find()
        res.status(200).json(records)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// @desc    Get Single Record
// @route   GET /records/:id
router.get("/:id", async (req, res) => {
    try {
        const record = await PersonRecord.findOne({ id: req.params.id })
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
    
    const c = await PersonRecord.countDocuments() + 1

    const record = new PersonRecord({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        creator: creator.badgeNumber,
        id: c
    })

    creator.personRecords.push(c)
    await creator.save()

    savedRecord = await record.save()
    res.status(201).json(savedRecord)
})

module.exports = router
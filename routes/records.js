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
        res.json({ message: error })
    }
})

// @desc    Create Single Record
// @route   POST /products
router.post("/", async (req, res) => {
    const creator = Officer.findOne( {badgeNumber: req.body.creator} )
    if(!creator) return res.status(404).json({ message: "Officer Not Found" })
    
    const record = new Record({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        creator: creator._id
    })

    savedRecord = await record.save()
    res.status(201).json(savedRecord)
})

module.exports = router
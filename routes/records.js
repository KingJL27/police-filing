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
    const creator = new Officer({
        firstName: "Friedrich1",
        lastName: "Vogel",
        badgeNumber: "SD-155"
    })
    
    creator.save(async (err) => {
        if (err) return res.status(400).json(err)

        const record = new Record({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            creator: creator._id
        })
      
        savedRecord = await record.save((err) => {
          if (err) return res.status(400).json(err);
          res.status(201).json(savedRecord)
        })
      })
})

module.exports = router



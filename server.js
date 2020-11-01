// IMPORTS
const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VARIABLES
const PORT = process.env.PORT || 5000
const DB_CONNECTION = process.env.DB_CONNECTION

const recordsRoute = require("./routes/records")

// ROUTES
app.get("/", (req, res) => {
    res.send("Home")
})

// @route POST /records
app.use("/records", recordsRoute)


// connect to db
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to db"))


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
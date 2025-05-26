const mongoose = require("mongoose")
require("dotenv").config()


// Created a function that help in connecting to database
const connectDB = async () =>{
    await mongoose.connect(process.env.DATABASE_URL)
}

module.exports = connectDB
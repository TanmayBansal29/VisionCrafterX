const express = require("express")
const { register } = require("../controllers/Auth")
const router = express.Router()

// Route for User Registration
router.post("/register", register)


module.exports = router
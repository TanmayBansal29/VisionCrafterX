const express = require("express")
const { register, login } = require("../controllers/Auth")
const router = express.Router()

// Route for User Registration
router.post("/register", register)

// Route for User Login
router.post("/login", login)


module.exports = router
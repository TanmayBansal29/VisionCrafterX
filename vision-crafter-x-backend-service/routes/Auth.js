const express = require("express")
const { register, login } = require("../controllers/Auth")
const router = express.Router()
const jwt = require("jsonwebtoken")

// Route for User Registration
router.post("/register", register)

// Route for User Login
router.post("/login", login)

// Route to verify the login in the frontend
router.get("/me", (req, res) => {
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Not Logged in"
        })
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Invalid Token"
        })
    }
})

module.exports = router
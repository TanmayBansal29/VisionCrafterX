const express = require("express")
const { chatAI } = require("../controllers/Chat")
const router = express.Router()

// Route for chatting with AI
router.post("/chat/AI", chatAI)

module.exports = router
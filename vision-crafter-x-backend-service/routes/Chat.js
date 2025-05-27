const express = require("express")
const { chatAI, getPromptConfig } = require("../controllers/Chat")
const { auth } = require("../middlewares/auth")
const router = express.Router()

// Route for chatting with AI
router.post("/chat/AI", auth, chatAI)

// Route for getting the prompt configs
router.get("/prompt-config", getPromptConfig)

module.exports = router
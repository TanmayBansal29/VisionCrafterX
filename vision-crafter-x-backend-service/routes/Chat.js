const express = require("express")
const { chatAI, getPromptConfig, savePrompt, fetchPrompts } = require("../controllers/Chat")
const { auth } = require("../middlewares/auth")
const router = express.Router()

// Route for chatting with AI
router.post("/chat/AI", auth, chatAI)

// Route for getting the prompt configs
router.get("/prompt-config", getPromptConfig)

// Route for saving the prompt to the database
router.post("/save/prompt", auth, savePrompt)

// Route for fetching the prompts from database
router.get("/fetch/prompts", auth, fetchPrompts)

module.exports = router
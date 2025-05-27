const { GoogleGenerativeAI } = require("@google/generative-ai")
const User = require("../models/User")
const Prompt = require("../models/PromptStudio")
require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API)

exports.chatAI = async (req, res) => {
    try {
        const { prompt } = req.body
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = await response.text()

        return res.status(200).json({
            success: true,
            message: "AI Content Generated",
            data: text
        })

    } catch(error) {
        console.log("Error: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

// Controller to get the config (Categories, Styles) - Centralized Approach
exports.getPromptConfig = async (req, res) => {
    const categoriesAllowed = ["📝 Blog", "🐦 Social Media", "🧠 Idea Generator", "💼 Business", "🛠️ Coding", "📈 SEO", "⚙️ Custom Prompt"]
    const stylesAllowed = ["Funny", "Mentor", "Professional"]

    try {
        return res.status(200).json({
            success: true,
            message: "Config Fetched",
            categories: categoriesAllowed,
            styles: stylesAllowed
        })
    } catch (error) {
        console.log("Error fetching the config details: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong fetching the config. Please try again"
        })
    }
}

// Controller to save the prompt into the database
exports.savePrompt = async (req, res) => {
    try {
        const {title, category, input, output, style, isFavorite} = req.body
        if(!title || !category || !input || !output) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details"
            })
        }

        const {_id: userId} = req.user

        if(!Array.isArray(output) || output.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Output must be a non-empty array"
            })
        }

        const prompt = await Prompt.create({
            title,
            category,
            input,
            output,
            style: style || "Professional",
            isFavorite: isFavorite || false,
            createdBy: userId
        })

        return res.status(200).json({
            success: true,
            message: "Prompt Saved Successfully",
            data: prompt
        })

    } catch (error) {
        console.log("Error while saving the prompt into database: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong saving the prompt. Please try again"
        })
    }
}
const { GoogleGenerativeAI } = require("@google/generative-ai")
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
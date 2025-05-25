const express = require("express")
const { GoogleGenerativeAI } = require("@google/generative-ai")
const cors = require("cors")

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API)

app.listen(4000, () => {
    console.log("Listening on PORT : 4000")
})

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Default Route Properly Running"
    })
})

app.post("/api/chat", async (req, res) => {
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
})
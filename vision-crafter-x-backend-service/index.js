const express = require("express")
const cors = require("cors")
const AuthRoutes = require("./routes/Auth")
const ChatAIRoutes = require("./routes/Chat")

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/api/v1/user", AuthRoutes)
app.use("/api/v1", ChatAIRoutes)

app.listen(4000, () => {
    console.log("Listening on PORT : 4000")
})

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Default Route Properly Running"
    })
})
const express = require("express")
const cors = require("cors")
const AuthRoutes = require("./routes/Auth")
const ChatAIRoutes = require("./routes/Chat")
const connectDB = require("./config/database")

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/v1/user", AuthRoutes)
app.use("/api/v1", ChatAIRoutes)

// Connection to Database and starting the server
connectDB().then(() => {
    console.log("Database Connection Successful")
    app.listen(4000, () => {
        console.log("Listening on PORT : 4000")
    })
}).catch((err) => {
    console.log("Failed to Connect to Database", err)
})

// Default Route
app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Default Route Properly Running"
    })
})
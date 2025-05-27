const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = async(req, res, next) => {
    try {
        // Extract the token
        const cookies = req.cookies
        const {token} = cookies
        // const token = req.cookies?.token || req.body?.token || (req.header("Authorization").replace("Bearer ", "") || "")

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Token is Missing"
            })
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode
            next()

        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is Invalid or Expired"
            })
        }
    } catch (error) {
        console.log("Error Validating: ", error)
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the user"
        })
    }
}
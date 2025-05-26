const User = require("../models/User")


exports.register = async(req, res) => {
    try {
        const {firstName, lastName, username, email, password, confirmPassword} = req.body
        if(!firstName || !lastName || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please Enter all detials"
            })
        }

        const isUsername = await User.findOne({username})
        if(isUsername){
            return res.status(400).json({
                success: false,
                message: "Username Already Exists"
            })
        }

        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please Login to Continue"
            })
        }

        
    } catch (error) {
        console.log("Error while registering user: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong registering user"
        })
    }
}
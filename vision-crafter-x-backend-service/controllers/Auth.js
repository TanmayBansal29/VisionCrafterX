const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.register = async(req, res) => {
    try {
        const {firstName, lastName, username, email, password, confirmPassword} = req.body
        if(!firstName || !lastName || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please Enter all details"
            })
        }

        if(password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password are not same. Please try again"
            })
        }

        const isUsername = await User.findOne({username})
        if(isUsername){
            return res.status(400).json({
                success: false,
                message: "Username Already Exists"
            })
        }

        const exisitingUser = await User.findOne({email})
        if(exisitingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please Login to Continue"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })

        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            data: user
        })

    } catch (error) {
        console.log("Error while registering user: ", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong registering user"
        })
    }
}
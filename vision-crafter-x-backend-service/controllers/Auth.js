const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

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
            message: "Something went wrong registering user, Please try again"
        })
    }
}

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body
        if(!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter all the details"
            })
        }

        const existingUser = await User.findOne({username})

        if(!existingUser) {
            return res.status(404).json({
                success: false,
                message: "No User found with this username"
            })
        }

        if(await bcrypt.compare(password, existingUser.password)){
            const token = jwt.sign(
                {username: existingUser.username, email: existingUser.email, id: existingUser._id},
                process.env.JWT_SECRET,
                {expiresIn: "4h"}
            )

            const options = {
                expires: new Date(Date.now() + 3 * 34 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === "Production",
                sameSite: "strict"
            }

            const {password: _, ...userData} = existingUser.toObject()
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                data: userData,
                message: "Login Successful"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password"
            })
        }
    } catch (error) {
        console.log("Error while logging the user", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong logging the user. Please try again"
        })
    }
}
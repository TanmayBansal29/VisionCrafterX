const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 75,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    }, 
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ("Invalid Error")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User
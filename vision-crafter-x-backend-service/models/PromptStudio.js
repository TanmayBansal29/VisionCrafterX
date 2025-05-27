const mongoose = require("mongoose")

const promptSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    category: {
        type: String,
        required: true,
        enum: ["📝 Blog", "🐦 Social Media", "🧠 Idea Generator", "💼 Business", "🛠️ Coding", "📈 SEO", "⚙️ Custom Prompt"],
        default: "⚙️ Custom Prompt"
    },
    input: {
        type: String,
        required: true,
        trim: true,
        maxLength: 250
    },
    output: [{
        text: {
            type: String,
            required: true,
            trim: true
        }, 
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    style: {
        type: String,
        enum: ["Funny",  "Mentor", "Professional"],
        default: "Professional"
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Prompt = mongoose.model("Prompt", promptSchema)
module.exports = Prompt
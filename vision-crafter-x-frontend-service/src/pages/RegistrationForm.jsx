import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            const res = await axios.post(BASE_URL + "/user/register", {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword
            })
            return navigate("/login")
        } catch (error) {
            setError(error?.response?.data || "Something Went Wrong")
            console.log("Error Occured: ", error)
        }
    }

  return (
    <div className="flex h-[700px] my-16 rounded-xl shadow-lg w-full overflow-hidden max-w-[1600px] mx-auto">

        {/* Left Panel */}
        <div className="relative w-1/2 overflow-hidden" >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                </div>
                <div className="relative z-10 text-white p-10 h-full flex flex-col justify-center">
                    <p className="text-4xl text-white font-bold mb-2">Welcome to</p>
                    <p className="text-5xl font-extrabold text-purple-600 mb-4">Vision Crafter X</p>
                    <p className="text-lg mb-6">Your Creative Companion powered by AI</p>
                    <p className="text-lg mb-6">Sign up to unlock a smarter way to craft ideas, generate powerful responses, and bring your vision to life. 
                        Whether you're a writer, thinker, or builder, VisionCrafterX is here to turn your prompts into purpose-driven 
                        content with speed, clarity, and creativity.
                    </p>
                    <p className="text-md font-medium italic">Let’s create something extraordinary together.</p>
                </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-white flex flex-col justify-center p-10">
                <p className="text-2xl text-gray-700 font-bold text-center mb-6">Register Now</p>
                <div className="flex gap-3 mb-4">
                        <input type="text" 
                            className="input input-primary w-1/2" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your First Name" />
                        <input type="text" 
                            className="input input-primary w-1/2" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Your Last Name" />
                </div>
                <input type="text" 
                    className="input input-primary w-full mb-4" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />
                <input type="email" 
                    className="input input-primary w-full mb-4" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" />
                <input type="password" 
                    className="input input-primary w-full mb-4" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <input type="password" 
                    className="input input-primary w-full mb-6" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" />
                <p className="text-red-500">{error}</p>
                <button class="btn btn-primary w-full mb-4" onClick={handleRegister}>Register</button>
                <div className="text-center text-sm text-gray-700 flex justify-center gap-2">
                    <p>Already have an Account?</p>
                    <Link to="/login" className="text-blue-600 hover:underline">Login Now</Link>
                </div>
        </div>
    </div>
  )
}

export default RegistrationForm
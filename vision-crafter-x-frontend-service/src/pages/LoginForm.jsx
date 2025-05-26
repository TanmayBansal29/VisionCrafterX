import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/user/login", {
                username,
                password
            }, {withCredentials: true})
            localStorage.setItem("user", JSON.stringify(res.data.data))
            dispatch(addUser(res.data))
            return navigate("/dashboard")
        } catch (error) {
            setError(error?.response?.data?.message || "Something Went Wrong")
            console.log("Error Occured: ", error)
        }
    }

  return (
    <div className="flex h-[700px] my-16 rounded-xl shadow-lg w-full overflow-hidden max-w-[1600px] mx-auto">

        {/* Left Panel */}
        <div className="relative w-3/4 overflow-hidden" >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                </div>
                <div className="relative z-10 text-white p-10 h-full flex flex-col justify-center">
                    <p className="text-4xl text-white font-bold mb-2">Welcome Back to</p>
                    <p className="text-5xl font-extrabold text-purple-600 mb-4">Vision Crafter X</p>
                    <p className="text-lg mb-6">Your Creative Powerhouse fueled by AI</p>
                    <p className="text-lg mb-6">Dive back into your workspace where ideas flow faster, creativity is amplified, and every prompt becomes a 
                        powerful outcome. VisionCrafterX empowers writers, thinkers, innovators, and creators like you to bring concepts to life with precision 
                        and imagination. From content generation to ideation, resume polishing to storytelling — everything you need is just a few 
                        clicks away. Log in now and pick up where you left off. Your next big creation starts here.
                    </p>
                    <p className="text-md font-medium italic">Let’s transform your ideas into impactful reality — together.</p>
                </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/4 bg-white flex flex-col justify-center items-center p-10">
            <p className="text-2xl text-gray-700 font-bold text-center mb-6">Login Now</p>
            <input type="username" 
                    className="input input-primary w-full mb-4" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />
            <input type="password" 
                    className="input input-primary w-full mb-4" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
            <p className='text-red-900'>{error}</p>
            <button class="btn btn-primary w-full mb-4" onClick={handleLogin}>Login</button>
            <div className="text-center text-sm text-gray-700 flex justify-center gap-2">
                <p>Not Having an Account</p>
                <Link to="/register" className="text-blue-600 hover:underline">Create Account</Link>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
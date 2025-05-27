import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillLightningFill } from "react-icons/bs"

const SidePanel = () => {
    const user = useSelector((store) => store.user)
  return (
    <div className='flex flex-col w-60 bg-base-300 h-screen p-3 shadow-lg'>
        <div className='flex gap-4 items-center bg-base-200 p-3 rounded-md'>
            {/* Photo */}
            <div className="avatar">
                <div className="w-12 rounded-full border-2 border-blue-600 overflow-hidden">
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.firstName} ${user.data.lastName}`} />
                </div>
            </div>
            <div>
                <p className='font-semibold text-lg text-white'>Hi, {user.data.firstName}</p>
                <Link to="/profile" className='text-xs text-blue-600 font-semibold hover:underline'>View Profile</Link>
            </div>
        </div>
        <hr className='my-4 border-gray-300'/>
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl mb-1'>Core Features</p>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-2 cursor-pointer transition duration-200'>🏡 Dashboard Home</Link>
            <div className='flex gap-2 items-center hover:bg-blue-100 hover:text-black rounded-md px-3 py-2 cursor-pointer transition duration-200'>
                <BsFillLightningFill style={{color: "gold"}}/>
                <Link>Prompt Studio</Link>
            </div>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>📝 AI Blog Writer</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>👨‍🏫 AI Tutor</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>💻 Code Playground</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>📚 Flashcards</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>📈 Analytics</Link>
        </div>
        <hr className='my-4 border-gray-300'/>
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl mb-1'>ToolBox</p>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>🧰 Dev Tools</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>📊 Data Assistant</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>📂 Project Workspace</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>🧠 AI Notebook</Link>
        </div>
        <hr className='my-4 border-gray-300'/>
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl mb-1'>Extras</p>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>💬 Community</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>🔔 Notifications</Link>
            <Link className='hover:bg-blue-100 hover:text-black rounded-md px-3 py-1.5 cursor-pointer transition duration-200'>🛠️ Settings</Link>
        </div>
    </div>
  )
}

export default SidePanel
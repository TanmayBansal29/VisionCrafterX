import { useSelector } from "react-redux"
import DateTimeShow from "./DateTimeShow"

const DashboardHome = () => {
    const user = useSelector((store) =>store.user)
  return (
    <div className='flex flex-col items-center h-screen flex-grow p-4'>
        <div>
            <p className="mt-4 font-bold text-3xl">Welcome Back, {user.data.firstName}</p>
            <DateTimeShow />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center justify-center text-center p-4 bg-gray-100 rounded-xl hover:shadow-md transition">
                <span className="text-4xl font-extrabold text-indigo-600">5</span>
                <p className="text-sm text-gray-500 mt-1">Quizzes Taken</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 bg-gray-100 rounded-xl hover:shadow-md transition">
                <span className="text-4xl font-extrabold text-green-600">5</span>
                <p className="text-sm text-gray-500 mt-1">Articles Read</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 bg-gray-100 rounded-xl hover:shadow-md transition">
                <span className="text-4xl font-extrabold text-blue-600">60</span>
                <p className="text-sm text-gray-500 mt-1">Problems Solved</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 bg-gray-100 rounded-xl hover:shadow-md transition">
                <span className="text-4xl font-extrabold text-pink-600">5</span>
                <p className="text-sm text-gray-500 mt-1">Active Projects</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardHome
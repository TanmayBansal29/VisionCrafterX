import LoginForm from "./pages/LoginForm"
import MainPage from "./pages/MainPage"
import RegistrationForm from "./pages/RegistrationForm"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useDispatch} from "react-redux"
import Dashboard from "./pages/Dashboard"
import DashboardHome from "./components/DashboardHome"
import RequireAuth from "./routes/RequireAuth"
import { useEffect } from "react"
import { addUser } from "./utils/userSlice"
import PromptStudio from "./components/PromptStudio"

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if(storedUser){
      dispatch(addUser(storedUser))
    }
  }, [dispatch])

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route path="/login" element={<LoginForm />}/> 
            <Route path="/register" element={<RegistrationForm/>}/>
            
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />}/>
                <Route path="prompt-studio" element={<PromptStudio/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

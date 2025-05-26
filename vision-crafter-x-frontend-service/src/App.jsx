import LoginForm from "./pages/LoginForm"
import MainPage from "./pages/MainPage"
import RegistrationForm from "./pages/RegistrationForm"
import TextGenerateBox from "./pages/TextGenerateBox"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider, useDispatch} from "react-redux"
import appStore from "./utils/appStore"
import Dashboard from "./pages/Dashboard"
import DashboardHome from "./components/DashboardHome"
import RequireAuth from "./routes/RequireAuth"
import { useEffect } from "react"
import { addUser } from "./utils/userSlice"

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
                <Route path="chat" element={<TextGenerateBox/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

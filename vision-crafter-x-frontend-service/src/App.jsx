import LoginForm from "./pages/LoginForm"
import MainPage from "./pages/MainPage"
import RegistrationForm from "./pages/RegistrationForm"
import TextGenerateBox from "./pages/TextGenerateBox"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/login" element={<LoginForm />}/> 
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path="/chat" element={<TextGenerateBox/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

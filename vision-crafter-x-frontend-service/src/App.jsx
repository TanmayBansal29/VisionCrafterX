import LoginForm from "./pages/LoginForm"
import MainPage from "./pages/MainPage"
import RegistrationForm from "./pages/RegistrationForm"
import TextGenerateBox from "./pages/TextGenerateBox"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider} from "react-redux"
import appStore from "./utils/appStore"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="/login" element={<LoginForm />}/> 
              <Route path="/register" element={<RegistrationForm/>}/>
              <Route path="/chat" element={<TextGenerateBox/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

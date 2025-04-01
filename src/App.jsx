import Home from "./screens/Home/Home"
import SignUp from "./screens/Singnup/SignUp"
import { Routes, Route } from "react-router-dom"
export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}


import { useState } from 'react'
import { Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Navbar from "./components/Navbar.jsx";
import User from "./components/User.jsx";
import Card from "./components/Card.jsx";
function App() {
  const [count, setCount] = useState(0)
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services"element={<Services/>}/>
      <Route path="/User"element={<User name="Yuvetal" department="IT" skills={["HTML","CSS","JavaScript","Python","Full Stack"]}/>}/>
      </Routes>
    <Card />
      </>
  )
}
export default App;
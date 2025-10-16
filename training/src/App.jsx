import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Navbar from "./components/Navbar.jsx";
import User from "./components/User.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/user"
          element={
            <User
              name="Yuvetal"
              department="IT"
              skills={["HTML", "CSS", "JavaScript", "Python", "Full Stack"]}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;


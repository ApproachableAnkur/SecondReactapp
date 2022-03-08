import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Home from './Home';
function App() {
  return (
    <>
       <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

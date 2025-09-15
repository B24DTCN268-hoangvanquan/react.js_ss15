import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/ex01/Home";
import About from "./components/ex01/About";
import Contact from "./components/ex01/Contact";
import Ex04 from "./components/ex04/ex04";
import Ex03 from "./components/ex03/ex03";
import Ex05 from "./components/ex05/ex04";
import Ex06 from "./components/ex06/ex06";


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
    
    //   <Router>
    //   <Routes>
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes> 
    // </Router>
    
    <>
    {/* <Ex04></Ex04> */}
    {/* <Ex03></Ex03> */}
    {/* <Ex05></Ex05> */}
    <Ex06></Ex06>
    </>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
 
import Header from "./pages/Headerport.js";
import Footer from "./pages/Footer.js";
import MainContent from "./pages/MainContent.js"
import Project from "./pages/Project.js"


function App() {
  return (
    <Router>
       <Header />
      <Routes>
 
        <Route path="/" element={<MainContent />} />
        <Route path="/project" element={<Project />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

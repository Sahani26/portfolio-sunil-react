import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
 
import Header from "./pages/Headerport.js";
import Footer from "./pages/Footer.js";
import MainContent from "./pages/MainContent.js"
import Project from "./pages/Project.js"
import Study from "./pages/Study.js"
import Aspnet from "./study-topic-page/aspnet.js"
import FirstPlugin from "./study-topic-page/FirstPlugin.js"
import CRUD460 from "./study-topic-page/CRUD460.js"
import Experience from "./pages/Experience.js"


function App() {
  return (
    <Router>
       <Header />
      <Routes>
 
        <Route path="/" element={<MainContent />} />
        <Route path="/ex" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/study" element={<Study />} />
        <Route path="/aspnet" element={<Aspnet />} />
        <Route path="/firstplugin" element={<FirstPlugin />} />
        <Route path="/crud-nopCommercer-4.60" element={<CRUD460 />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Myart from "./Components/Myart/Myart";
import About from "./Components/About/About"
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Myart />
            </>
          }
        />

        {/* Example additional pages */}
        <Route path="/" element={<About />} /> 
        <Route path="/" element={<Services />} /> 
        <Route path="/" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;

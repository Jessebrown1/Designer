import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Myart from "./Components/Myart/Myart";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Myart />
              <BackToTop />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer displayed on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;

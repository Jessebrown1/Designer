import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "bounce.out" }
    );
  }, []);

  return (
    <header ref={navRef} className="header">
<a href="/" className="logo">
  <img
    src="/logo.png" // path to your logo image
    alt="My Logo"           // accessibility text
    className="logo-img"    // optional CSS class
  />
</a>
<button 
  className="hamburger" 
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "✖" : "☰"}
</button>

      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
  <Link to="#" onClick={() => setIsOpen(false)}>About</Link>
  <Link to="#" onClick={() => setIsOpen(false)}>Services</Link>
  <Link to="#" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

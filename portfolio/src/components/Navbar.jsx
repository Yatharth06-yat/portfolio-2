import React, { useState } from 'react';
import '../style/Navbar.css';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const navbarHeight = 80;
      const offsetTop = targetSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
    closeMenu(); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="Port">Portfolio</span>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-list ${isOpen ? 'mobile' : ''}`}>
        <li className="homee">
          <a href="#home" onClick={handleNavClick}>Home</a>
        </li>
        <li className="About">
          <a href="#about" onClick={handleNavClick}>About</a>
        </li>
        <li className="portfolio">
          <a href="#portfolio" onClick={handleNavClick}>Portfolio ShowCase</a>
        </li>
        <li className="contact">
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

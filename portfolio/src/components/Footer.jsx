import React from 'react';
import '../style/Footer.css';

export default function Footer() {
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navbarHeight = 80; // adjust if navbar height differs
      const offsetTop = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-left">
          <h2 className="footer-logo">Yatharth Gupta</h2>
          <p>Passionate Frontend Developer building user-centric experiences.</p>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#portfolio" onClick={handleNavClick}>Portfolio ShowCase</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Yatharth Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}

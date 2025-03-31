import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' 
         });
        };

        const handleNavigation = () => {
            window.history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about-us" onClick={handleNavigation}>About Us</Link></li>
            <li><Link to="/contact-us" onClick={handleNavigation}>Contact Us</Link></li>
            <li><Link to="/privacy-policy" onClick={handleNavigation}>Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" onClick={handleNavigation}>Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-info-compact">
            <div>
              <p className="highlight">Address</p>
              <p>123 Food Street</p>
              <p>Colombo 03, Sri Lanka</p>
            </div>
            <div>
              <p className="highlight">Phone</p>
              <p>+94 11 123 4567</p>
              <p>+94 77 123 4567</p>
            </div>
            <div>
              <p className="highlight">Email</p>
              <p>info@dashtime.com</p>
              <p>support@dashtime.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Column */}
        <div className="footer-column">
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column">
          <h3>Stay Updated</h3>
          <div className="footer-newsletter">
            <p>Subscribe to our newsletter for the latest offers and updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="subscribe-button">
                <FaPaperPlane /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DashTime. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
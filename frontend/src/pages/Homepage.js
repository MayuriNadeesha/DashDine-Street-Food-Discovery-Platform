import React, { useState } from 'react';
import './Homepage.css'; // Updated CSS import
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaMapMarkerAlt, FaStar, FaHeart, FaSearch } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Homepage() { // Updated component name
  const [searchQuery, setSearchQuery] = useState('');
  const [showVendors, setShowVendors] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search vendors:', searchQuery);
  };

  // Sample vendor data
  const vendors = [
    { id: 1, name: 'Street Food Vendor 1' },
    { id: 2, name: 'Street Food Vendor 2' },
    { id: 3, name: 'Street Food Vendor 3' },
    { id: 4, name: 'Street Food Vendor 4' },
    { id: 5, name: 'Street Food Vendor 5' },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">DashDine</div>
          <ul className="nav-links">
            <li><Link to="/login"><FaSignInAlt /> Login</Link></li>
            <li><Link to="/signup"><FaUser /> Sign Up</Link></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Discover the Best Street Food Near You</h1>
          <p>Explore local street food vendors, read reviews, and find your next favorite dish.</p>

          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit"><FaSearch /></button>
          </form>

          {/* Vendor Profile Button */}
          <button className="cta-button" onClick={() => setShowVendors(!showVendors)}>
            <FaMapMarkerAlt /> Vendor Profiles
          </button>

          {/* Vendor List (Conditional Rendering) */}
          {showVendors && (
            <div className="vendor-list">
              <h3>Select a Vendor</h3>
              <ul>
                {vendors.map((vendor) => (
                  <li key={vendor.id}>
                    <Link to={`/vendor-profile/${vendor.id}`}>{vendor.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="hero-images">
          <div className="image-box" style={{ backgroundImage: "url('https://via.placeholder.com/300x200')" }}></div>
          <div className="image-box" style={{ backgroundImage: "url('https://via.placeholder.com/300x200')" }}></div>
          <div className="image-box" style={{ backgroundImage: "url('https://via.placeholder.com/300x200')" }}></div>
        </div>
      </header>

      {/* Overview of Platform Features */}
      <section className="features-section">
        <h2>Why Choose DashDine?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Find Vendors Easily</h3>
            <p>Use our interactive map to locate street food vendors near you.</p>
          </div>
          <div className="feature-card">
            <FaStar className="feature-icon" />
            <h3>Read Reviews</h3>
            <p>Check out user reviews and ratings before you visit.</p>
          </div>
          <div className="feature-card">
            <FaHeart className="feature-icon" />
            <h3>Save Favorites</h3>
            <p>Save your favorite vendors and dishes for quick access.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"DashDine helped me discover amazing street food I never knew existed!"</p>
            <span>- User 1</span>
          </div>
          <div className="testimonial-card">
            <p>"The map feature is so convenient. I can find vendors anywhere I go."</p>
            <span>- User 2</span>
          </div>
          <div className="testimonial-card">
            <p>"I love the reviews and ratings. It makes choosing a vendor so easy."</p>
            <span>- User 3</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Quick Links Column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
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

          {/* Social Media Column - Now Centered */}
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
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DashTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage; // Updated export name
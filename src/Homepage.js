import React from 'react';
import './Homepage.css'; // Updated CSS import
import { FaUser, FaSignInAlt, FaMapMarkerAlt, FaStar, FaHeart } from 'react-icons/fa';

function Homepage() { // Updated component name
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">DashDine</div>
          <ul className="nav-links">
            <li><a href="/login"><FaSignInAlt /> Login</a></li>
            <li><a href="/signup"><FaUser /> Sign Up</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Discover the Best Street Food Near You</h1>
          <p>Explore local street food vendors, read reviews, and find your next favorite dish.</p>
          <button className="cta-button">Get Started</button>
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
        <p>&copy; 2024 DashDine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage; // Updated export name
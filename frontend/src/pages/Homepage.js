import React, { useState } from 'react';
import './Homepage.css'; // Updated CSS import
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaMapMarkerAlt, FaStar, FaHeart, FaSearch } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '../pages/Footer';
import { FaChevronRight } from 'react-icons/fa';

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
  const [showAllVendors, setShowAllVendors] = useState(false);
  
  const vendors = [
    { id: 1, name: 'Street Food Vendor 1' },
    { id: 2, name: 'Street Food Vendor 2' },
    { id: 3, name: 'Street Food Vendor 3' },
    { id: 4, name: 'Street Food Vendor 4' },
    { id: 5, name: 'Street Food Vendor 5' },
    { id: 6, name: 'Street Food Vendor 6' },
    { id: 7, name: 'Street Food Vendor 7' },
    { id: 8, name: 'Street Food Vendor 8' },
    { id: 9, name: 'Street Food Vendor 9' },
    { id: 10, name: 'Street Food Vendor 10' },
    { id: 11, name: 'Street Food Vendor 11' },
    { id: 12, name: 'Street Food Vendor 12' },
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
          <div className="vendor-list-container">
          <button 
            className="cta-button" 
            onClick={() => setShowVendors(!showVendors)}
          >
            <FaMapMarkerAlt /> Vendor Profiles
          </button>
          
          {showVendors && (
            <div className="vendor-list">
              <div className="vendor-list-header">
                <h3>Popular Vendors</h3>
                <span className="vendor-count">{vendors.length} vendors available</span>
              </div>
              
              <div className="vendor-list-content">
                <ul className="initial-vendors">
                  {vendors.slice(0, 5).map((vendor) => (
                    <li key={vendor.id}>
                      <Link 
                        to={`/vendor-profile/${vendor.id}`}
                        onClick={() => setShowVendors(false)}
                        className="vendor-link"
                      >
                        <span className="vendor-name">{vendor.name}</span>
                        <FaChevronRight className="vendor-arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {vendors.length > 5 && (
                  <div className="scrollable-vendors">
                    <div className="scroll-label">More Vendors ↓</div>
                    <ul>
                      {vendors.slice(5).map((vendor) => (
                        <li key={vendor.id}>
                          <Link 
                            to={`/vendor-profile/${vendor.id}`}
                            onClick={() => setShowVendors(false)}
                            className="vendor-link"
                          >
                            <span className="vendor-name">{vendor.name}</span>
                            <FaChevronRight className="vendor-arrow" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
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


{/* Footer Component */}
    <Footer />
    </div>
  );
}

export default Homepage; // Updated export name
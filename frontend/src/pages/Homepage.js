// import React, { useState, useRef, useEffect } from 'react';
// import './Homepage.css';
// import { Link } from 'react-router-dom';
// import { FaUser, FaSignInAlt, FaMapMarkerAlt, FaStar, FaHeart, FaSearch } from 'react-icons/fa';
// import Footer from '../pages/Footer';
// import { FaChevronRight } from 'react-icons/fa';
// import logo from '../assets/Logo.png';

// function Homepage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showVendors, setShowVendors] = useState(false);
//   const vendorDropdownRef = useRef(null);
//   const vendorButtonRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (vendorDropdownRef.current && !vendorDropdownRef.current.contains(event.target) &&
//           vendorButtonRef.current && !vendorButtonRef.current.contains(event.target)) {
//         setShowVendors(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log('Search vendors:', searchQuery);
//   };

//   // Sample vendor data
//   const vendors = Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     name: `Street Food Vendor ${i + 1}`
//   }));
  

//   return (
//     <div className="App">
//       {/* Hero Section */}
//       <header className="hero-section">
//         <nav className="navbar">
//           <div className="logo">
//             <img src={logo} alt="DashDine Logo" style={{ height: '100px' }} />
//           </div>
//           <ul className="nav-links">
//             <li><Link to="/login"><FaSignInAlt /> Login</Link></li>
//             <li><Link to="/signup"><FaUser /> Sign Up</Link></li>
//           </ul>
//         </nav>
        
//         <div className="hero-content">
//           <h1>Discover the Best Street Food Near You</h1>
//           <p>Explore local street food vendors, read reviews, and find your next favorite dish.</p>



//           {/* Search Bar */}
//           <form className="search-bar" onSubmit={handleSearchSubmit}>
//             <input
//               type="text"
//               placeholder="Search vendors..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="search-input"
//             />
//             <button type="submit" className="search-button">
//               <FaSearch className="search-icon" />
//             </button>
//           </form>

//           {/* Vendor Profile Button with Fixed Position */}
//           <div className="vendor-profile-container">
//             <button 
//               ref={vendorButtonRef}
//               className="vendor-profile-button" 
//               onClick={() => setShowVendors(!showVendors)}
//             >
//               <FaMapMarkerAlt /> Vendor Profiles
//             </button>
            
//             {/* Dropdown Wrapper */}
//             <div className="vendor-dropdown-wrapper">
//               {showVendors && (
//                 <div ref={vendorDropdownRef} className="vendor-dropdown">
//                   <ul>
//                     {vendors.map((vendor) => (
//                       <li key={vendor.id}>
//                         <Link 
//                           to={`/vendor-profile/${vendor.id}`}
//                           onClick={() => setShowVendors(false)}
//                           className="vendor-link"
//                         >
//                           <span className="vendor-name">{vendor.name}</span>
//                           <FaChevronRight className="vendor-arrow" />
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-images">
//           <div className="image-box" style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
//             backgroundPosition: "center center"
//           }} aria-label="Delicious street food"></div>
          
//           <div className="image-box" style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
//             backgroundPosition: "center center"
//           }} aria-label="Friendly vendor"></div>
          
//           <div className="image-box" style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
//             backgroundPosition: "center center"
//           }} aria-label="Happy customers"></div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="features-section">
//         <h2>Why Choose DashDine?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <FaMapMarkerAlt className="feature-icon" />
//             <h3>Find Vendors Easily</h3>
//             <p>Use our interactive map to locate street food vendors near you.</p>
//           </div>
//           <div className="feature-card">
//             <FaStar className="feature-icon" />
//             <h3>Read Reviews</h3>
//             <p>Check out user reviews and ratings before you visit.</p>
//           </div>
//           <div className="feature-card">
//             <FaHeart className="feature-icon" />
//             <h3>Save Favorites</h3>
//             <p>Save your favorite vendors and dishes for quick access.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <div className="testimonials-grid">
//           <div className="testimonial-card">
//             <p>"DashDine helped me discover amazing street food I never knew existed!"</p>
//             <span>- User 1</span>
//           </div>
//           <div className="testimonial-card">
//             <p>"The map feature is so convenient. I can find vendors anywhere I go."</p>
//             <span>- User 2</span>
//           </div>
//           <div className="testimonial-card">
//             <p>"I love the reviews and ratings. It makes choosing a vendor so easy."</p>
//             <span>- User 3</span>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Homepage;

import React, { useState, useRef, useEffect } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaMapMarkerAlt, FaStar, FaHeart, FaSearch, FaChevronRight } from 'react-icons/fa';
import Footer from '../pages/Footer';
import logo from '../assets/Logo.png';

function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showVendors, setShowVendors] = useState(false);
  const vendorDropdownRef = useRef(null);
  const vendorButtonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        vendorDropdownRef.current &&
        !vendorDropdownRef.current.contains(event.target) &&
        vendorButtonRef.current &&
        !vendorButtonRef.current.contains(event.target)
      ) {
        setShowVendors(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setShowVendors(true); // Automatically open dropdown on typing
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setShowVendors(true);
  };

  // Sample vendor data
  const vendors = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Street Food Vendor ${i + 1}`
  }));

  // Filter vendors based on search query
  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="DashDine Logo" style={{ height: '100px' }} />
          </div>
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
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </form>

          {/* Vendor Profile Button with Dropdown */}
          <div className="vendor-profile-container">
            <button
              ref={vendorButtonRef}
              className="vendor-profile-button"
              onClick={() => setShowVendors(!showVendors)}
            >
              <FaMapMarkerAlt /> Vendor Profiles
            </button>

            {/* Dropdown Wrapper */}
            <div className="vendor-dropdown-wrapper">
              {showVendors && (
                <div ref={vendorDropdownRef} className="vendor-dropdown">
                  <ul>
                    {filteredVendors.length > 0 ? (
                      filteredVendors.map((vendor) => (
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
                      ))
                    ) : (
                      <li className="no-results">No vendors found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div
            className="image-box"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1074&q=80')",
              backgroundPosition: "center center",
            }}
            aria-label="Delicious street food"
          ></div>

          <div
            className="image-box"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1170&q=80')",
              backgroundPosition: "center center",
            }}
            aria-label="Friendly vendor"
          ></div>

          <div
            className="image-box"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1170&q=80')",
              backgroundPosition: "center center",
            }}
            aria-label="Happy customers"
          ></div>
        </div>
      </header>

      {/* Features Section */}
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

      <Footer />
    </div>
  );
}

export default Homepage;

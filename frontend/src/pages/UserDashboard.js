import React, { useState } from 'react';
import { FaUser, FaHeart, FaHistory, FaStar, FaSearch } from 'react-icons/fa';
import './UserDashboard.css';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('profile');

  const user = {
    name: 'User Test',
    email: 'user123@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    phone: '+94 77 123 4567',
    address: '123 Main Street, Colombo, Sri Lanka',
  };

  const favoriteVendors = [
    { id: 1, name: 'Street Food Vendor 1' },
    { id: 2, name: 'Street Food Vendor 2' },
    { id: 3, name: 'Street Food Vendor 3' },
    { id: 4, name: 'Street Food Vendor 4' },
    { id: 5, name: 'Street Food Vendor 5' },
  ];

  const recentlyViewedVendors = [
    { id: 6, name: 'Street Food Vendor 6' },
    { id: 7, name: 'Street Food Vendor 7' },
    { id: 8, name: 'Street Food Vendor 8' },
    { id: 9, name: 'Street Food Vendor 9' },
    { id: 10, name: 'Street Food Vendor 10' },
  ];

  const reviews = [
    { id: 1, vendor: 'Street Food Vendor 1', rating: 5, comment: 'Amazing food!' },
    { id: 2, vendor: 'Street Food Vendor 2', rating: 3.5, comment: 'Ok!' },
    { id: 3, vendor: 'Street Food Vendor 3', rating: 4.5, comment: 'Love it!' },
    { id: 4, vendor: 'Street Food Vendor 4', rating: 5, comment: 'Excellent! You have to test it!' },
    { id: 5, vendor: 'Street Food Vendor 5', rating: 4, comment: 'Yummy!' },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star-filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star-half" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star-empty" />);
    }

    return stars;
  };

  return (
    <div className="user-dashboard">
      <div className="sidebar">
        <div className="logo">DashDine</div>
        <nav>
          <button
            className={activeSection === 'profile' ? 'active' : ''}
            onClick={() => setActiveSection('profile')}
          >
            <FaUser /> Profile
          </button>
          <button
            className={activeSection === 'favorites' ? 'active' : ''}
            onClick={() => setActiveSection('favorites')}
          >
            <FaHeart /> Favorite Vendors
          </button>
          <button
            className={activeSection === 'recently-viewed' ? 'active' : ''}
            onClick={() => setActiveSection('recently-viewed')}
          >
            <FaHistory /> Recently Viewed
          </button>
          <button
            className={activeSection === 'reviews' ? 'active' : ''}
            onClick={() => setActiveSection('reviews')}
          >
            <FaStar /> Reviews
          </button>
        </nav>
      </div>

      <div className="main-content">
        <div className="top-section">
          <div className="welcome-message">
            <h1>Welcome {user.name}!</h1>
          </div>
          <div className="dashboard-search-bar">
            <input type="text" placeholder="Search vendors..." />
            <button><FaSearch /></button>
          </div>
          <div className="profile-picture-container">
            <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          </div>
        </div>

        <div className="content-section">
          {activeSection === 'profile' && (
            <div className="profile-section">
              <h2>Profile Information</h2>
              <div className="profile-picture-center">
                <img src={user.profilePicture} alt="Profile" className="profile-picture-large" />
              </div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
          )}

          {activeSection === 'favorites' && (
            <div className="favorites-section">
              <h2>Favorite Vendors</h2>
              <ul>
                {favoriteVendors.map((vendor) => (
                  <li key={vendor.id}>{vendor.name}</li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === 'recently-viewed' && (
            <div className="recently-viewed-section">
              <h2>Recently Viewed Vendors</h2>
              <ul>
                {recentlyViewedVendors.map((vendor) => (
                  <li key={vendor.id}>{vendor.name}</li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === 'reviews' && (
            <div className="reviews-section">
              <h2>Your Reviews</h2>
              <ul>
                {reviews.map((review) => (
                  <li key={review.id}>
                    <strong>{review.vendor}</strong> - {renderStars(review.rating)}
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard; 


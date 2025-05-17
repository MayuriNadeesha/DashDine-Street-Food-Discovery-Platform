import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaHistory, FaStar, FaSearch } from 'react-icons/fa';
import './UserDashboard.css';
import axios from 'axios';
import logo from '../assets/Logo.png';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState(() => {
    const storedUser = localStorage.getItem('userInfo');
    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: 'Test User Testing',
          email: 'useru123@gmail.com',
          profilePicture: '',
          phone: '+94 77 123 4567',
          address: '123 Main Street, Colombo, Sri Lanka',
        };
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    return () => {
      if (selectedImage && selectedImage.preview) URL.revokeObjectURL(selectedImage.preview);
    };
  }, [selectedImage]);

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

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageUrl = response.data.url;
        setUserInfo({ ...userInfo, profilePicture: imageUrl });
      } catch (error) {
        console.error('Upload failed:', error.response?.data || error.message);
        alert('Failed to upload image.');
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setIsEditing(false);
    if (selectedImage && selectedImage.preview) URL.revokeObjectURL(selectedImage.preview);
    setSelectedImage(null);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="DashDine Logo" />
        </div>
        <nav>
          <button className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}><FaUser /> Profile</button>
          <button className={activeSection === 'favorites' ? 'active' : ''} onClick={() => setActiveSection('favorites')}><FaHeart /> Favorite Vendors</button>
          <button className={activeSection === 'recently-viewed' ? 'active' : ''} onClick={() => setActiveSection('recently-viewed')}><FaHistory /> Recently Viewed</button>
          <button className={activeSection === 'reviews' ? 'active' : ''} onClick={() => setActiveSection('reviews')}><FaStar /> Reviews</button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <h1 className="welcome-text">Welcome {userInfo.name}!</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search vendors..." />
            <button><FaSearch /></button>
          </div>
          <div className="profile-pic-wrapper">
            <img src={userInfo.profilePicture || 'https://via.placeholder.com/60?text=User'} alt="Profile" className="profile-pic" />
          </div>
        </header>

        <section className="content-section">
          {activeSection === 'profile' && (
            <div className="profile-section">
              <h2>Profile Information</h2>
              <div className="profile-picture-center">
                <img src={userInfo.profilePicture || 'https://via.placeholder.com/150?text=Profile'} alt="Profile" className="profile-picture-large" />
              </div>
              {isEditing ? (
                <form onSubmit={handleSave} className="profile-form">
                  <label>
                    Profile Picture:
                    <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
                  </label>
                  <label>Name:<input type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required /></label>
                  <label>Email:<input type="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required /></label>
                  <label>Phone Number:<input type="text" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} /></label>
                  <label>Address:<input type="text" value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} /></label>
                  <button type="submit" className="save-btn">Save Profile</button>
                </form>
              ) : (
                <>
                  <p><strong>Name:</strong> {userInfo.name}</p>
                  <p><strong>Email:</strong> {userInfo.email}</p>
                  <p><strong>Phone Number:</strong> {userInfo.phone}</p>
                  <p><strong>Address:</strong> {userInfo.address}</p>
                  <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
                </>
              )}
            </div>
          )}

          {activeSection === 'favorites' && (
            <div>
              <h2>Favorite Vendors</h2>
              <ul>{favoriteVendors.map((v) => <li key={v.id}>{v.name}</li>)}</ul>
            </div>
          )}

          {activeSection === 'recently-viewed' && (
            <div>
              <h2>Recently Viewed Vendors</h2>
              <ul>{recentlyViewedVendors.map((v) => <li key={v.id}>{v.name}</li>)}</ul>
            </div>
          )}

          {activeSection === 'reviews' && (
            <div>
              <h2>Your Reviews</h2>
              <ul>{reviews.map((r) => (
                <li key={r.id}><strong>{r.vendor}</strong> - {renderStars(r.rating)}<p>{r.comment}</p></li>
              ))}</ul>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;

import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaHistory, FaStar, FaSearch, FaHome } from 'react-icons/fa';
import './UserDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
    if (selectedImage && selectedImage.preview) {
      return () => URL.revokeObjectURL(selectedImage.preview);
    }
  }, [selectedImage]);

  // Fetch user reviews
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:5000/api/reviews/user/${userId}`)
        .then(response => setReviews(response.data))
        .catch(error => console.error('Error fetching user reviews:', error));
    }
  }, []);

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

  // Filter vendors based on search term
  const filteredFavoriteVendors = favoriteVendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecentlyViewedVendors = recentlyViewedVendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleLogout = () => {
    localStorage.removeItem('isUserAuthenticated');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="DashDine Logo" />
        </div>
        <nav>
          <button className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>
            <FaUser /> Profile
          </button>
          <button className={activeSection === 'favorites' ? 'active' : ''} onClick={() => setActiveSection('favorites')}>
            <FaHeart /> Favorite Vendors
          </button>
          <button className={activeSection === 'recently-viewed' ? 'active' : ''} onClick={() => setActiveSection('recently-viewed')}>
            <FaHistory /> Recently Viewed
          </button>
          <button className={activeSection === 'reviews' ? 'active' : ''} onClick={() => setActiveSection('reviews')}>
            <FaStar /> Reviews
          </button>
          <button className="home-btn" onClick={() => navigate('/')}>
            <FaHome /> Back to Home
          </button>
        </nav>
        <button 
          className="logout-button" 
          onClick={handleLogout}
          aria-label="Logout"
        >
          <span className="logout-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5488 13.0122 12.9967 12.5647 12.9969 12.0124L13 4.00894Z" fill="currentColor"/>
              <path d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3059 8.68579 18.9917 12 18.9917C15.3142 18.9917 18 16.3059 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z" fill="currentColor"/>
              <path d="M12 4.00894C11.4477 4.00894 11 4.45662 11 5.00894C11 5.56122 11.4477 6.00894 12 6.00894L16 6.00894C16.5523 6.00894 17 5.56122 17 5.00894C17 4.45662 16.5523 4.00894 16 4.00894L12 4.00894Z" fill="currentColor"/>
            </svg>
          </span>
          Logout
        </button>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <h1 className="welcome-text">Welcome {userInfo.name}!</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search vendors..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm ? (
              <button onClick={() => setSearchTerm('')}>&times;</button>
            ) : (
              <button><FaSearch /></button>
            )}
          </div>
          <div className="profile-pic-wrapper">
            <img src={userInfo.profilePicture || 'https://via.placeholder.com/60?text=User'} alt="Profile" className="profile-pic" />
          </div>
        </header>

        <section className="content-section">
          {activeSection === 'profile' && (
            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-content">
                  <div className="profile-picture-left">
                    <img 
                      src={userInfo.profilePicture || 'https://via.placeholder.com/150?text=Profile'} 
                      alt="Profile" 
                      className="profile-picture-large" 
                    />
                    {isEditing && (
                      <label className="upload-label">
                        Change Photo
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageChange} 
                          className="file-input" 
                        />
                      </label>
                    )}
                  </div>

                  <div className="profile-info">
                    {isEditing ? (
                      <form onSubmit={handleSave} className="profile-form">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                          />
                        </div>
                        <div className="form-actions">
                          <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>
                            Cancel
                          </button>
                          <button type="submit" className="save-btn">
                            Save Profile
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <h2>Profile Information</h2>
                        <div className="info-group">
                          <strong>Name</strong>
                          <p>{userInfo.name}</p>
                        </div>
                        <div className="info-group">
                          <strong>Email</strong>
                          <p>{userInfo.email}</p>
                        </div>
                        <div className="info-group">
                          <strong>Phone Number</strong>
                          <p>{userInfo.phone}</p>
                        </div>
                        <div className="info-group">
                          <strong>Address</strong>
                          <p>{userInfo.address}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {!isEditing && (
                    <div className="profile-actions">
                      <button onClick={() => setIsEditing(true)} className="edit-btn">
                        Edit Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'favorites' && (
            <div>
              <h2>Favorite Vendors</h2>
              {filteredFavoriteVendors.length > 0 ? (
                <ul>
                  {filteredFavoriteVendors.map((v) => (
                    <li key={v.id} onClick={() => navigate(`/vendor-profile/${v.id}`)} className="clickable-vendor">
                      {v.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{searchTerm ? 'No matching favorite vendors found' : 'You have no favorite vendors yet'}</p>
              )}
            </div>
          )}

          {activeSection === 'recently-viewed' && (
            <div>
              <h2>Recently Viewed Vendors</h2>
              {filteredRecentlyViewedVendors.length > 0 ? (
                <ul>
                  {filteredRecentlyViewedVendors.map((v) => (
                    <li key={v.id} onClick={() => navigate(`/vendor-profile/${v.id}`)} className="clickable-vendor">
                      {v.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{searchTerm ? 'No matching recently viewed vendors found' : 'You have no recently viewed vendors yet'}</p>
              )}
            </div>
          )}

          {activeSection === 'reviews' && (
            <div>
              <h2>Your Reviews</h2>
              {reviews.length > 0 ? (
                <ul>
                  {reviews.map((r) => (
                    <ReviewItem key={r._id} review={r} />
                  ))}
                </ul>
              ) : (
                <p>You haven't submitted any reviews yet.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function ReviewItem({ review }) {
  const [vendorName, setVendorName] = useState('');

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/vendors/${review.vendorId}`);
        setVendorName(res.data.name);
      } catch (err) {
        console.error('Error fetching vendor info:', err);
        setVendorName(`Vendor ${review.vendorId}`);
      }
    };
    fetchVendor();
  }, [review.vendorId]);

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
    <li>
      <strong>{vendorName}</strong> - {renderStars(review.rating)}
      <p>{review.comment}</p>
    </li>
  );
}

export default UserDashboard;
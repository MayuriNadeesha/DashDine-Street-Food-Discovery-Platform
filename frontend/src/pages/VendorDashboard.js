import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUtensils, FaClock, FaChartLine, FaComments, FaCog,
  FaSearch, FaUserCircle, FaStar, FaPlus, FaTrash
} from 'react-icons/fa';
import './VendorDashboard.css';
import logo from '../assets/Logo.png';

function VendorDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('menu');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoursSearchTerm, setHoursSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Load initial state from localStorage or use defaults
  const [menuItems, setMenuItems] = useState(() => {
    const saved = localStorage.getItem('vendorMenuItems');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Kottu Roti', price: 'LKR 500', description: 'Chopped roti with vegetables and meat', category: 'Main' },
      { id: 2, name: 'Hoppers', price: 'LKR 300', description: 'Bowl-shaped pancakes with egg', category: 'Breakfast' },
      { id: 3, name: 'String Hoppers', price: 'LKR 400', description: 'Steamed rice noodles with curry', category: 'Main' }
    ];
  });

  const [businessHours, setBusinessHours] = useState(() => {
    const saved = localStorage.getItem('vendorBusinessHours');
    return saved ? JSON.parse(saved) : {
      monday: [{ open: '08:00', close: '20:00' }],
      tuesday: [{ open: '08:00', close: '20:00' }],
      wednesday: [{ open: '08:00', close: '20:00' }],
      thursday: [{ open: '08:00', close: '20:00' }],
      friday: [{ open: '08:00', close: '20:00' }],
      saturday: [{ open: '09:00', close: '18:00' }],
      sunday: [{ open: '09:00', close: '18:00' }]
    };
  });

  const [vendorInfo, setVendorInfo] = useState(() => {
    const saved = localStorage.getItem('vendorProfile');
    return saved ? JSON.parse(saved) : {
      name: 'Street Food Vendor',
      email: 'vendor@streetfood.com',
      phone: '+94 77 123 4567',
      location: 'Colombo Fort, Sri Lanka',
      description: 'Authentic Sri Lankan street food with 20 years of tradition'
    };
  });

  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('vendorProfileImage') || null;
  });

  const [newMenuItem, setNewMenuItem] = useState({ 
    name: '', 
    price: '', 
    description: '', 
    category: 'Main' 
  });

  const [reviews] = useState([
    { id: 1, customer: 'John D.', rating: 5, comment: 'Amazing food!', date: '2023-05-15' },
    { id: 2, customer: 'Sarah M.', rating: 4, comment: 'Great service', date: '2023-05-10' }
  ]);

  const analyticsData = {
    visits: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], data: [120, 190, 130, 150, 210, 180, 200] },
    ratings: { average: 4.5, total: 47, distribution: [50, 20, 15, 10, 5] }
  };

  useEffect(() => {
    if (!localStorage.getItem('isVendorAuthenticated')) {
      navigate('/login?tab=vendor');
    }
  }, [navigate]);

  // Save menu items whenever they change
  useEffect(() => {
    localStorage.setItem('vendorMenuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  // Save business hours whenever they change
  useEffect(() => {
    localStorage.setItem('vendorBusinessHours', JSON.stringify(businessHours));
  }, [businessHours]);

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (newMenuItem.name && newMenuItem.price) {
      const updatedItems = [...menuItems, { ...newMenuItem, id: menuItems.length + 1 }];
      setMenuItems(updatedItems);
      setNewMenuItem({ name: '', price: '', description: '', category: 'Main' });
    }
  };

  const handleDeleteMenuItem = (id) => {
    const updatedItems = menuItems.filter(item => item.id !== id);
    setMenuItems(updatedItems);
  };

  const handleHoursChange = (day, index, field, value) => {
    const updated = businessHours[day].map((slot, i) =>
      i === index ? { ...slot, [field]: value } : slot
    );
    setBusinessHours({ ...businessHours, [day]: updated });
  };

  const handleAddTimeSlot = (day) => {
    const updatedHours = {
      ...businessHours,
      [day]: [...businessHours[day], { open: '08:00', close: '20:00' }]
    };
    setBusinessHours(updatedHours);
  };

  const handleDeleteTimeSlot = (day, index) => {
    const updated = businessHours[day].filter((_, i) => i !== index);
    setBusinessHours({ ...businessHours, [day]: updated.length > 0 ? updated : [{ open: '', close: '' }] });
  };

  const handleVendorInfoChange = (e) => {
    const { name, value } = e.target;
    setVendorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('vendorProfileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem('vendorProfile', JSON.stringify(vendorInfo));
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isVendorAuthenticated');
    navigate('/login');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    ));
  };

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="vendor-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="DashDine Logo" style={{ height: '100px' }} />
        </div>
        <nav>
          <button className={activeSection === 'menu' ? 'active' : ''} onClick={() => setActiveSection('menu')}>
            <FaUtensils /> Menu Management
          </button>
          <button className={activeSection === 'hours' ? 'active' : ''} onClick={() => setActiveSection('hours')}>
            <FaClock /> Business Hours
          </button>
          <button className={activeSection === 'analytics' ? 'active' : ''} onClick={() => setActiveSection('analytics')}>
            <FaChartLine /> Analytics
          </button>
          <button className={activeSection === 'reviews' ? 'active' : ''} onClick={() => setActiveSection('reviews')}>
            <FaComments /> Customer Reviews
          </button>
          <button className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>
            <FaCog /> Settings
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
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-section">
          <div className="welcome-message">
            <h1>Welcome, {vendorInfo.name}</h1>
          </div>
          <div className="profile-picture-container">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-picture" />
            ) : (
              <FaUserCircle className="profile-picture-icon" />
            )}
          </div>
        </div>

        <div className="content-section">
          {/* Menu Management */}
          {activeSection === 'menu' && (
            <div className="menu-management">
              <div className="menu-header">
                <h2>Menu Management</h2>
                <div className="search-container">
                  <div className="dashboard-search-bar">
                    <input
                      type="text"
                      placeholder="Search menu items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button><FaSearch /></button>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleAddMenuItem} className="add-menu-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Item Name</label>
                    <input 
                      type="text" 
                      value={newMenuItem.name} 
                      onChange={(e) => setNewMenuItem({...newMenuItem, name: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input 
                      type="text" 
                      value={newMenuItem.price} 
                      onChange={(e) => setNewMenuItem({...newMenuItem, price: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea 
                      value={newMenuItem.description} 
                      onChange={(e) => setNewMenuItem({...newMenuItem, description: e.target.value})} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={newMenuItem.category} 
                      onChange={(e) => setNewMenuItem({...newMenuItem, category: e.target.value})}
                    >
                      <option>Main</option>
                      <option>Breakfast</option>
                      <option>Appetizer</option>
                      <option>Dessert</option>
                      <option>Beverage</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="add-button">
                  <FaPlus /> Add Item
                </button>
              </form>

              <div className="menu-items-list">
                {filteredMenuItems.length > 0 ? (
                  <ul>
                    {filteredMenuItems.map(item => (
                      <li key={item.id}>
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <div className="price">{item.price}</div>
                          <div className="description">{item.description}</div>
                          <div className="category">{item.category}</div>
                        </div>
                        <button 
                          className="delete-button" 
                          onClick={() => handleDeleteMenuItem(item.id)}
                        >
                          <FaTrash /> Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-items">No matching menu items found.</p>
                )}
              </div>
            </div>
          )}

          {/* Business Hours */}
          {activeSection === 'hours' && (
            <div className="business-hours">
              <h2>Business Hours</h2>
              <div className="hours-search-container">
                <div className="dashboard-search-bar">
                  <input
                    type="text"
                    placeholder="Search days..."
                    value={hoursSearchTerm}
                    onChange={(e) => setHoursSearchTerm(e.target.value)}
                    autoComplete="off"
                  />
                  <button><FaSearch /></button>
                </div>
              </div>
              
              {Object.entries(businessHours)
                .filter(([day]) => 
                  day.toLowerCase().includes(hoursSearchTerm.toLowerCase().trim())
                )
                .map(([day, slots]) => (
                  <div key={day} className="day-section">
                    <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                    {slots.map((slot, index) => (
                      <div className="time-slot" key={index}>
                        <div className="time-inputs">
                          <input
                            type="time"
                            value={slot.open}
                            onChange={(e) => handleHoursChange(day, index, 'open', e.target.value)}
                            className="time-picker"
                          />
                          <span className="time-separator">to</span>
                          <input
                            type="time"
                            value={slot.close}
                            onChange={(e) => handleHoursChange(day, index, 'close', e.target.value)}
                            className="time-picker"
                          />
                        </div>
                        <button
                          className="delete-slot"
                          onClick={() => handleDeleteTimeSlot(day, index)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                    <button
                      className="add-slot-button"
                      onClick={() => handleAddTimeSlot(day)}
                    >
                      <FaPlus /> Add Time Slot
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* Analytics Section */}
          {activeSection === 'analytics' && (
            <div className="analytics">
              <h2>Analytics</h2>
              <div className="analytics-grid">
                <div className="stat-card">
                  <h3>Weekly Visits</h3>
                  <div className="visits-chart">
                    {analyticsData.visits.labels.map((label, index) => (
                      <div key={label} className="chart-bar">
                        <div 
                          className="bar" 
                          style={{ height: `${analyticsData.visits.data[index] / 2}px` }}
                        ></div>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stat-card">
                  <h3>Customer Ratings</h3>
                  <div className="rating-summary">
                    <div className="average-rating">
                      {analyticsData.ratings.average}
                    </div>
                    <div className="rating-distribution">
                      {[5, 4, 3, 2, 1].map((stars, i) => (
                        <div key={stars} className="distribution-row">
                          <span>{stars} stars</span>
                          <div className="distribution-bar">
                            <div 
                              className="fill" 
                              style={{ width: `${analyticsData.ratings.distribution[i]}%` }}
                            ></div>
                          </div>
                          <span>{analyticsData.ratings.distribution[i]}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Section */}
          {activeSection === 'reviews' && (
            <div className="reviews">
              <h2>Customer Reviews</h2>
              <div className="reviews-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <h4>{review.customer}</h4>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <div className="review-date">{review.date}</div>
                    <div className="review-comment">{review.comment}</div>
                    <button className="reply-button">Reply</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Section */}
          
{activeSection === 'settings' && (
  <div className="settings">
    <div className="settings-header">
      <h2>Vendor Settings</h2>
      {!isEditing ? (
        <button className="edit-button" onClick={handleEditToggle}>
          Edit Profile
        </button>
      ) : (
        <div className="edit-actions">
          <button className="cancel-button" onClick={handleEditToggle}>
            Cancel
          </button>
          <button className="save-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      )}
    </div>

    <div className="profile-card">
      <div className="profile-content">
        <div className="profile-picture-left">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-picture-large" />
          ) : (
            <FaUserCircle className="profile-picture-large" />
          )}
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
            <form className="settings-form">
              <div className="form-group">
                <label>Vendor Name</label>
                <input
                  type="text"
                  name="name"
                  value={vendorInfo.name}
                  onChange={handleVendorInfoChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={vendorInfo.email}
                  onChange={handleVendorInfoChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={vendorInfo.phone}
                  onChange={handleVendorInfoChange}
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={vendorInfo.location}
                  onChange={handleVendorInfoChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={vendorInfo.description}
                  onChange={handleVendorInfoChange}
                />
              </div>
            </form>
          ) : (
            <>
              <div className="info-group">
                <strong>Vendor Name</strong>
                <p>{vendorInfo.name}</p>
              </div>
              <div className="info-group">
                <strong>Email</strong>
                <p>{vendorInfo.email}</p>
              </div>
              <div className="info-group">
                <strong>Phone Number</strong>
                <p>{vendorInfo.phone}</p>
              </div>
              <div className="info-group">
                <strong>Location</strong>
                <p>{vendorInfo.location}</p>
              </div>
              <div className="info-group">
                <strong>Description</strong>
                <p>{vendorInfo.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
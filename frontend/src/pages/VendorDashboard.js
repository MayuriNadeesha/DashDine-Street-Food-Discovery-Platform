/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaClock, FaChartLine, FaComments, FaCog, FaSearch, FaUserCircle, FaStar } from 'react-icons/fa';
import './VendorDashboard.css';

function VendorDashboard() {
  const [activeSection, setActiveSection] = useState('menu');
  const [businessHours, setBusinessHours] = useState({
    monday: { open: '08:00', close: '20:00' },
    tuesday: { open: '08:00', close: '20:00' },
    wednesday: { open: '08:00', close: '20:00' },
    thursday: { open: '08:00', close: '20:00' },
    friday: { open: '08:00', close: '20:00' },
    saturday: { open: '09:00', close: '18:00' },
    sunday: { open: '09:00', close: '18:00' }
  });

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Kottu Roti', price: 'LKR 500', description: 'Chopped roti with vegetables and meat', category: 'Main' },
    { id: 2, name: 'Hoppers', price: 'LKR 300', description: 'Bowl-shaped pancakes with egg', category: 'Breakfast' },
    { id: 3, name: 'String Hoppers', price: 'LKR 400', description: 'Steamed rice noodles with curry', category: 'Main' }
  ]);

  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Main'
  });

  const [reviews, setReviews] = useState([
    { id: 1, customer: 'John D.', rating: 5, comment: 'Amazing food! Will come again.', date: '2023-05-15' },
    { id: 2, customer: 'Sarah M.', rating: 4, comment: 'Great service and delicious food', date: '2023-05-10' },
    { id: 3, customer: 'Robert P.', rating: 3, comment: 'Good but a bit pricey', date: '2023-05-05' }
  ]);

  const analyticsData = {
    visits: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [120, 190, 130, 150, 210, 180, 200]
    },
    ratings: {
      average: 4.5,
      distribution: [5, 10, 15, 20, 50] // percentages for 1-5 stars
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication on component mount
    const isAuthenticated = localStorage.getItem('isVendorAuthenticated');
    if (!isAuthenticated) {
      navigate('/login?tab=vendor');
    }
  }, [navigate]);

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (newMenuItem.name && newMenuItem.price) {
      setMenuItems([...menuItems, { ...newMenuItem, id: menuItems.length + 1 }]);
      setNewMenuItem({ name: '', price: '', description: '', category: 'Main' });
    }
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleHoursChange = (day, field, value) => {
    setBusinessHours({
      ...businessHours,
      [day]: { ...businessHours[day], [field]: value }
    });
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

  return (
    <div className="vendor-dashboard">
      {/* Sidebar *//*}
      <div className="sidebar">
        <div className="logo">DashDine Vendor</div>
        <nav>
          <button
            className={activeSection === 'menu' ? 'active' : ''}
            onClick={() => setActiveSection('menu')}
          >
            <FaUtensils /> Menu Management
          </button>
          <button
            className={activeSection === 'hours' ? 'active' : ''}
            onClick={() => setActiveSection('hours')}
          >
            <FaClock /> Business Hours
          </button>
          <button
            className={activeSection === 'analytics' ? 'active' : ''}
            onClick={() => setActiveSection('analytics')}
          >
            <FaChartLine /> Analytics
          </button>
          <button
            className={activeSection === 'reviews' ? 'active' : ''}
            onClick={() => setActiveSection('reviews')}
          >
            <FaComments /> Customer Reviews
          </button>
          <button
            className={activeSection === 'settings' ? 'active' : ''}
            onClick={() => setActiveSection('settings')}
          >
            <FaCog /> Settings
          </button>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Rest of your VendorDashboard JSX remains the same *//*}
      {/* ... *//*}
    </div>
  );
}

export default VendorDashboard;*/


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaClock, FaChartLine, FaComments, FaCog, FaSearch, FaUserCircle, FaStar, FaPlus, FaTrash, FaReply } from 'react-icons/fa';
import './VendorDashboard.css';
import logo from '../assets/Logo.png';

function VendorDashboard() {
  const [activeSection, setActiveSection] = useState('menu');
  const [businessHours, setBusinessHours] = useState({
    monday: { open: '08:00', close: '20:00' },
    tuesday: { open: '08:00', close: '20:00' },
    wednesday: { open: '08:00', close: '20:00' },
    thursday: { open: '08:00', close: '20:00' },
    friday: { open: '08:00', close: '20:00' },
    saturday: { open: '09:00', close: '18:00' },
    sunday: { open: '09:00', close: '18:00' }
  });

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Kottu Roti', price: 'LKR 500', description: 'Chopped roti with vegetables and meat', category: 'Main' },
    { id: 2, name: 'Hoppers', price: 'LKR 300', description: 'Bowl-shaped pancakes with egg', category: 'Breakfast' },
    { id: 3, name: 'String Hoppers', price: 'LKR 400', description: 'Steamed rice noodles with curry', category: 'Main' }
  ]);

  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Main'
  });

  const [reviews, setReviews] = useState([
    { id: 1, customer: 'John D.', rating: 5, comment: 'Amazing food! Will come again.', date: '2023-05-15' },
    { id: 2, customer: 'Sarah M.', rating: 4, comment: 'Great service and delicious food', date: '2023-05-10' },
    { id: 3, customer: 'Robert P.', rating: 3, comment: 'Good but a bit pricey', date: '2023-05-05' }
  ]);

  const [vendorInfo, setVendorInfo] = useState({
    name: 'Street Food Vendor',
    email: 'vendor@streetfood.com',
    phone: '+94 77 123 4567',
    location: 'Colombo Fort, Sri Lanka',
    description: 'Authentic Sri Lankan street food with 20 years of tradition'
  });

  const analyticsData = {
    visits: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [120, 190, 130, 150, 210, 180, 200]
    },
    ratings: {
      average: 4.5,
      total: 47,
      distribution: [5, 10, 15, 20, 50] // percentages for 1-5 stars
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isVendorAuthenticated');
    if (!isAuthenticated) {
      navigate('/login?tab=vendor');
    }
  }, [navigate]);

  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (newMenuItem.name && newMenuItem.price) {
      setMenuItems([...menuItems, { ...newMenuItem, id: menuItems.length + 1 }]);
      setNewMenuItem({ name: '', price: '', description: '', category: 'Main' });
    }
  };

  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleHoursChange = (day, field, value) => {
    setBusinessHours({
      ...businessHours,
      [day]: { ...businessHours[day], [field]: value }
    });
  };

  const handleVendorInfoChange = (e) => {
    const { name, value } = e.target;
    setVendorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
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

  return (
    <div className="vendor-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo"><img src={logo} alt="DashDine Logo" style={{ height: '100px' }} /></div>
        <nav>
          <button
            className={activeSection === 'menu' ? 'active' : ''}
            onClick={() => setActiveSection('menu')}
          >
            <FaUtensils /> Menu Management
          </button>
          <button
            className={activeSection === 'hours' ? 'active' : ''}
            onClick={() => setActiveSection('hours')}
          >
            <FaClock /> Business Hours
          </button>
          <button
            className={activeSection === 'analytics' ? 'active' : ''}
            onClick={() => setActiveSection('analytics')}
          >
            <FaChartLine /> Analytics
          </button>
          <button
            className={activeSection === 'reviews' ? 'active' : ''}
            onClick={() => setActiveSection('reviews')}
          >
            <FaComments /> Customer Reviews
          </button>
          <button
            className={activeSection === 'settings' ? 'active' : ''}
            onClick={() => setActiveSection('settings')}
          >
            <FaCog /> Settings
          </button>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-section">
          <div className="welcome-message">
            <h1>Welcome, {vendorInfo.name}</h1>
          </div>
          <div className="dashboard-search-bar">
            <input type="text" placeholder="Search..." />
            <button><FaSearch /></button>
          </div>
          <div className="profile-picture-container">
            <FaUserCircle className="profile-picture" />
          </div>
        </div>

        <div className="content-section">
          {/* Menu Management Section */}
          {activeSection === 'menu' && (
            <div className="menu-management">
              <h2>Menu Management</h2>
              
              <div className="add-menu-form">
                <h3>Add New Menu Item</h3>
                <form onSubmit={handleAddMenuItem}>
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
                      <option value="Main">Main</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Appetizer">Appetizer</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Beverage">Beverage</option>
                    </select>
                  </div>
                  <button type="submit" className="add-button">
                    <FaPlus /> Add Item
                  </button>
                </form>
              </div>

              <div className="menu-items-list">
                <h3>Current Menu Items</h3>
                <ul>
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p className="price">{item.price}</p>
                        <p className="description">{item.description}</p>
                        <p className="category">{item.category}</p>
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
              </div>
            </div>
          )}

          {/* Business Hours Section */}
          {activeSection === 'hours' && (
            <div className="business-hours">
              <h2>Business Hours</h2>
              <form className="hours-form">
                {Object.entries(businessHours).map(([day, hours]) => (
                  <div key={day} className="day-hours">
                    <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                    <input
                      type="time"
                      value={hours.open}
                      onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={hours.close}
                      onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                    />
                  </div>
                ))}
                <button type="submit" className="save-button">
                  Save Hours
                </button>
              </form>
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
                          style={{ height: `${analyticsData.visits.data[index] / 10}px` }}
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
                      <span className="rating">{analyticsData.ratings.average}</span>
                      <div className="stars">
                        {renderStars(Math.round(analyticsData.ratings.average))}
                      </div>
                      <p>Based on {analyticsData.ratings.total} reviews</p>
                    </div>

                    <div className="rating-distribution">
                      {[5, 4, 3, 2, 1].map((stars, index) => (
                        <div key={stars} className="distribution-row">
                          <span>{stars} stars</span>
                          <div className="distribution-bar">
                            <div 
                              className="fill" 
                              style={{ width: `${analyticsData.ratings.distribution[index]}%` }}
                            ></div>
                          </div>
                          <span>{analyticsData.ratings.distribution[index]}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Reviews Section */}
          {activeSection === 'reviews' && (
            <div className="customer-reviews">
              <h2>Customer Reviews</h2>
              
              <div className="reviews-summary">
                <div className="average-rating">
                  <h3>Average Rating</h3>
                  <div className="rating">{analyticsData.ratings.average}</div>
                  <div className="stars">
                    {renderStars(Math.round(analyticsData.ratings.average))}
                  </div>
                </div>
                <div className="total-reviews">
                  <h3>Total Reviews</h3>
                  <div className="rating">{analyticsData.ratings.total}</div>
                </div>
              </div>

              <div className="reviews-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <h4>{review.customer}</h4>
                      <div className="stars">
                        {renderStars(review.rating)}
                      </div>
                      <span className="date">{review.date}</span>
                    </div>
                    <p className="comment">{review.comment}</p>
                    <button className="reply-button">
                      <FaReply /> Reply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="settings">
              <h2>Vendor Settings</h2>
              
              <form className="settings-form" onSubmit={handleSaveSettings}>
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
                <button type="submit" className="save-button">
                  Save Settings
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
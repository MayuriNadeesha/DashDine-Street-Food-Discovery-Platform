import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './SignUp.css';
import { FaUser, FaEnvelope, FaLock, FaStore, FaUserTie, FaMapMarkerAlt, FaHome } from 'react-icons/fa';

function SignUp() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get('type') === 'vendor' ? 'vendor' : 'user';
  
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    vendorName: '',
    vendorLocation: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'vendor') {
      if (!formData.vendorName || !formData.vendorLocation || !formData.email || !formData.password) {
        setError('All fields are required');
        return;
      }
    } else {
      if (!formData.username || !formData.email || !formData.password) {
        setError('All fields are required');
        return;
      }
    }

    setError('');
    console.log('Registration data:', formData);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-tabs">
        <button 
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('user');
            setError('');
          }}
        >
          <FaUserTie /> User Registration
        </button>
        <button 
          className={`tab ${activeTab === 'vendor' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('vendor');
            setError('');
          }}
        >
          <FaStore /> Vendor Registration
        </button>
      </div>

      <div className="signup-content">
        <h2>{activeTab === 'user' ? 'User Registration' : 'Vendor Registration'}</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit} className="signup-form">
          {activeTab === 'vendor' && (
            <>
              <div className="input-group">
                <FaStore className="icon" />
                <input
                  name="vendorName"
                  type="text"
                  placeholder="Business Name"
                  value={formData.vendorName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <FaMapMarkerAlt className="icon" />
                <input
                  name="vendorLocation"
                  type="text"
                  placeholder="Business Location"
                  value={formData.vendorLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {activeTab === 'user' && (
            <div className="input-group">
              <FaUser className="icon" />
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            {activeTab === 'user' ? 'Create User Account' : 'Register Vendor'}
          </button>
        </form>

        <div className="auth-links">
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="home-link">
            <Link to="/"><FaHome /> Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
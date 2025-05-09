import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock, FaStore, FaUserTie, FaHome } from 'react-icons/fa';

function Login() {
  const [activeTab, setActiveTab] = useState('user');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Both fields are required');
      return;
    }

    // Temporary mock authentication
    if (activeTab === 'vendor') {
      if (formData.username === 'vendor' && formData.password === 'vendor123') {
        localStorage.setItem('isVendorAuthenticated', 'true');
        navigate('/vendor-dashboard');
      } else {
        setError('Invalid vendor credentials');
      }
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-tabs">
        <button 
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('user');
            setError('');
          }}
        >
          <FaUserTie /> User Login
        </button>
        <button 
          className={`tab ${activeTab === 'vendor' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('vendor');
            setError('');
          }}
        >
          <FaStore /> Vendor Login
        </button>
      </div>

      <div className="login-content">
        <h2>{activeTab === 'user' ? 'User Login' : 'Vendor Login'}</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              name="username"
              type="text" 
              placeholder={activeTab === 'user' ? 'Username' : 'Vendor ID'} 
              value={formData.username}
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

          <button type="submit" className="login-button">
            {activeTab === 'user' ? 'User Login' : 'Vendor Login'}
          </button>
        </form>

        <div className="auth-links">
          <p className="signup-link">
            Don't have an account?{' '}
            <Link to={`/signup?type=${activeTab}`}>
              {activeTab === 'user' ? 'User Sign Up' : 'Vendor Registration'}
            </Link>
          </p>
          <p className="home-link">
            <Link to="/"><FaHome /> Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
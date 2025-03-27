import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    // Simulate login (replace this with actual authentication logic)
    console.log('Logging in with:', { username, password });

    // Clear error message
    setError('');

    // Redirect to the User Dashboard after successful login
    navigate('/user-dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <FaUser className="icon" />
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
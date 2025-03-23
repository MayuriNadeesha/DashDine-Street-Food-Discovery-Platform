 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './SignUp.css'; // You can style the page with this CSS file

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., API call, validation, etc.)
    console.log('Form Submitted:', { username, email, password });
    
    // Redirect to login page after successful signup (you can also handle error cases here)
    navigate('/login');
  };

  const handleGoHome = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <div className="signup-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>

      <div className="homepage-link">
        <p>Or go to <a href="/" onClick={handleGoHome}>Home Page</a></p>
      </div>
    </div>
  );
}

export default SignUp;

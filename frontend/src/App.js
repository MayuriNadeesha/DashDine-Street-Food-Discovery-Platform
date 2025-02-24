import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import Homepage
import Login from './pages/Login'; // Import Login
import SignUp from './pages/SignUp';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default route */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}
      </Routes>
  );
}

export default App;

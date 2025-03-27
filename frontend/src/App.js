import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import Homepage
import Login from './pages/Login'; // Import Login
import SignUp from './pages/SignUp'; // Import SignUp
import VendorProfilePage from './pages/VendorProfilePage'; // Import VendorProfilePage
import UserDashboard from './pages/UserDashboard'; // Import UserDashboard
import AboutUs from './pages/AboutUs'; // Import AboutUspage


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/vendor-profile/:vendorId" element={<VendorProfilePage />} /> {/* Dynamic route */}
      <Route path="/user-dashboard" element={<UserDashboard />} /> {/* Route for User Dashboard */}
      <Route path="/about-us" element={<AboutUs />} /> {/* Route for AboutUs */}
    </Routes>
  );
}

export default App;
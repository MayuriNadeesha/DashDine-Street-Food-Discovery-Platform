import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VendorProfilePage from './pages/VendorProfilePage';
import UserDashboard from './pages/UserDashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import VendorDashboard from './pages/VendorDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import PrivacyPolicy
import TermsConditions from './pages/TermsConditions'; // Import TermsConditions



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/vendor-profile/:vendorId" element={<VendorProfilePage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/vendor-dashboard" element={<VendorDashboard />} /> {/* Fixed typo here */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Route for PrivacyPolicy */}
      <Route path="/terms-conditions" element={<TermsConditions />} /> {/* Route for ContactUsTermsConditions */}
    </Routes>
  );
}

export default App;
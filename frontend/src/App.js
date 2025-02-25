import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import Homepage
import Login from './pages/Login'; // Import Login
import SignUp from './pages/SignUp';
import VendorProfilePage from './pages/VendorProfilePage'; 

function App() {
  return (


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vendor-profile/:vendorId" element={<VendorProfilePage />} /> {/* Dynamic route */}
      </Routes>

  );
}

export default App;

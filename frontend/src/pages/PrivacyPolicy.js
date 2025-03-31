import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css'; 

function PrivacyPolicy() {
  
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="privacy-policy-content">
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            DashDine ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you use our 
            street food discovery platform.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number when you register</li>
            <li><strong>Location Data:</strong> To help you discover nearby street food vendors</li>
            <li><strong>Usage Data:</strong> How you interact with our platform</li>
            <li><strong>Payment Information:</strong> Processed securely through our payment partners</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>Your information helps us to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our platform</li>
            <li>Allow you to participate in interactive features</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request transfer of your data</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> privacy@dashdine.com
            <br />
            <strong>Address:</strong> 123 Privacy Lane, Colombo 03, Sri Lanka
          </p>
        </section>

        <div className="policy-footer">
        <Link to="/" className="back-to-home" onClick={() => {window.history.scrollRestoration = 'manual';window.scrollTo(0, 0);}}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
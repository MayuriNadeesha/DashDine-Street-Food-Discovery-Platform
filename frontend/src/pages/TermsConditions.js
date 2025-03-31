import React from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css'; // Create this CSS file

function TermsConditions() {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms & Conditions</h1>
        <p className="effective-date">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the DashDine platform ("Service"), you agree to be bound by these Terms. 
            If you disagree with any part, you may not access the Service.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. User Responsibilities</h2>
          <ul>
            <li>You must be at least 13 years old to use this Service</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You will not use the Service for any illegal or unauthorized purpose</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Content Policy</h2>
          <p>
            Users may post reviews and content, provided it is lawful, not spam, and doesn't contain:
          </p>
          <ul>
            <li>False or misleading information</li>
            <li>Offensive or discriminatory content</li>
            <li>Commercial advertisements without permission</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Vendor Relationships</h2>
          <p>
            DashDine serves as a discovery platform only. We are not responsible for:
          </p>
          <ul>
            <li>Food quality or safety from listed vendors</li>
            <li>Accuracy of vendor information</li>
            <li>Transactions between users and vendors</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, DashDine shall not be liable for any indirect, 
            incidental, special, consequential or punitive damages resulting from your use of the Service.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use after changes constitutes 
            acceptance of the new terms.
          </p>
        </section>

        <div className="terms-footer">
          <Link 
            to="/" 
            className="back-to-home"
            onClick={() => {
              window.history.scrollRestoration = 'manual';
              window.scrollTo(0, 0);
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;

import React from 'react';
import './AboutUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/Logo.png';
//import uthpalaImg from '../assets/uthpala.jpg';

function AboutUs() {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: 'Mayuri Nadeesha',
      role: 'Developer',
      bio: 'Passionate about coding.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedin: '#',
      github: '#'
    },
    {
      id: 2,
      name: 'Uthpala Pathirana',
      role: 'Developer',
      bio: 'Passionate about coding.',
      //image: uthpalaImg,
      linkedin: '#',
      github: '#'
    },
    
  ];

  return (
    <div className="about-us-container">
      {/* Header Section */}
      <div className="about-us-header">
        <img src={logo} alt="DashDine Logo" className="contact-logo" />
        <h1>About DashDine</h1>
        <p>
          We're on a mission to connect food lovers with the best street food vendors 
          in Sri Lanka and around the world. Our platform makes it easy to discover, 
          review, and support local street food businesses.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At DashDine, we believe that street food represents the heart and soul of 
          a culture. Our mission is to preserve these culinary traditions while making 
          them more accessible to everyone. We empower small food vendors by giving 
          them a digital presence and helping them reach more customers.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-member-image"
              />
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p>{member.bio}</p>
                <div style={{ marginTop: '10px' }}>
                  <a href={member.linkedin} style={{ marginRight: '10px' }}>
                    <FaLinkedin color="#0077b5" size={20} />
                  </a>
                  <a href={member.github}>
                    <FaGithub color="#333" size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>info@dashdine.com</p>
            <p>support@dashdine.com</p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+94 11 123 4567</p>
            <p>+94 77 123 4567 (Mobile)</p>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>123 Food Street</p>
            <p>Colombo 03, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
import React from 'react';
import medicalImage from '../../assets/images/doctor.png'; // Adjusted to a relative path with forward slashes
import { Link } from 'react-router-dom';
import './Start.css'; // Make sure you have corresponding CSS for styling

const Start = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="app-logo">MediScan</h1>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Experienced general practitioners who have an eye for your care</h2>
          <p>MediCan provides affordable healthcare, accessible on mobile and online for everyone.</p>
          <Link to="/login" className="action-button">Continue as User</Link>
          <Link to="/home" className="action-button guest-button">Continue as Guest</Link>
        </div>
        <div className="hero-image">
          <img src={medicalImage} alt="Doctor" />
        </div>
      </section>

      <section className="practices-section" id="practices">
        <h2>Our Practices</h2>
        <p>Explore our specialized areas and find the care you need.</p>
        <div className="practices-cards">
          <div className="card">
            <h3>Cardiology</h3>
            <p>Heart health and cardiovascular care.</p>
            <a href="#read-more">Read more</a>
          </div>
          <div className="card">
            <h3>Orthopedics</h3>
            <p>Comprehensive care for bones and joints.</p>
            <a href="#read-more">Read more</a>
          </div>
          <div className="card">
            <h3>Ophthalmology</h3>
            <p>Eye health and vision care.</p>
            <a href="#read-more">Read more</a>
          </div>
          
        </div>
      </section>

      <section className="why-choose-us" id="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>Our advanced diagnostic technology ensures accurate, timely results.</p>
        <div className="video-container">
          <video controls src="https://www.example.com/intro-video.mp4"> {/* Replace with actual video link */}
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Start;

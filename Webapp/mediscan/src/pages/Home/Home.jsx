import React, { useState } from "react";
import "./Home.css";
import user from "../../assets/Images/profile_photo.png";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
// Import the CSS file

const Home = () => {
  const { token } = useContext(StoreContext);
  const [name, setName] = useState("Guest");

  if (token) {
    setName("Salman");
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>

      {/* User Greeting Section */}
      <div className="user-greeting">
        <div className="greeting-text">
          <h2>{`Hi ${name}`}</h2>

          <p>How are you feeling today?</p>
        </div>
        <img
          src={user} // Replace with actual image URL
          alt="User"
          className="user-avatar"
        />
      </div>

      {/* Symptom Checker */}
      <section className="checker-section">
        <h3>Skin Detection</h3>
        <div className="checker-card">
          <div className="checker-number">01</div>
          <div className="checker-text">
            Upload your to skin photo to get a detailed diagnosis report.
          </div>
          <Link to="/ct" className="checker-button">
            Check
          </Link>
        </div>
      </section>

      {/* MRI Checker */}
      <section className="checker-section">
        <h3>MRI Checker</h3>
        <div className="checker-card">
          <div className="checker-number">02</div>
          <div className="checker-text">
            Upload your MRI scan to receive a detailed diagnosis report.
          </div>
          <Link to="/mri" className="checker-button">
            Check
          </Link>
        </div>
      </section>

      {/* CT Scan Checker */}
      <section className="checker-section">
        <h3>CT Scan Checker</h3>
        <div className="checker-card">
          <div className="checker-number">03</div>
          <div className="checker-text">
            Upload your CT scan to get a comprehensive diagnosis report.
          </div>
          <Link to="/ct" className="checker-button">
            Check
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
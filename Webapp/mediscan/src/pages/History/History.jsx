import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./History.css";
import profile_photo from "../../assets/images/profile_photo.png";

const History = () => {
  return (
    <div className="history-container">
      {/* Heading */}
      <h1 className="history-heading">Medical History</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={profile_photo} alt="Profile" className="profile-image" />
        <h2 className="profile-name">Muhammad Anas</h2>
        <div className="profile-details">
          <p>
            <i className="fas fa-map-marker-alt"></i> Islamabad, Pakistan
          </p>
          <p>
            <i className="fas fa-birthday-cake"></i> 14 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;

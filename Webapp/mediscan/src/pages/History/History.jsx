import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import './History.css';
import profile_photo from '../../assets/images/profile_photo.png';
const History = () => {
  const { url, token ,user} = useContext(StoreContext);

  // Sample data for the medical history (replace with actual data from your API)
  const medicalHistory = [
    {
      date: '2024-10-01',
      diagnosis: 'Skin Cancer',
      image: profile_photo, // Replace with actual image URL
    },
    {
      date: '2024-09-15',
      diagnosis: 'Pneumonia',
      image: profile_photo, // Replace with actual image URL
    
    },
    {
      date: '2024-08-30',
      diagnosis: 'Diabetic Retinopathy',
      image: profile_photo, // Replace with actual image URL
    },
  ];

  return (
    <div className="history-container">
      {/* Heading */}
      <h1 className="history-heading">Medical History</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <img 
          src={profile_photo} 
          alt="Profile" 
          className="profile-image"
        />
        <h2 className="profile-name">User</h2>
        <div className="profile-details">
          <p><i className="fas fa-map-marker-alt"></i> Gender</p>
          <p><i className="fas fa-birthday-cake"></i> 14 years</p>
        </div>
      </div>

      {/* Medical History Table */}
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {medicalHistory.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.diagnosis}</td>
              <td>
                <img 
                  src={entry.image} 
                  alt={`Diagnosis for ${entry.date}`} 
                  className="history-image" 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;

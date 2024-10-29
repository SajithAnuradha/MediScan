import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./History.css";
import profile_photo from "../../assets/images/profile_photo.png";
import abisherk from "../../../../../Backend/uploads/abisherk.jpg";
const History = () => {
  const { url, user } = useContext(StoreContext);
  const [medicalHistory, setMedicalHistory] = useState([{}]);
  const user_id = user.user_id;

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      try {
        const response = await axios.post(`${url}/history`, {
          user_id: user.user_id,
        });
        setMedicalHistory(response.data);
      } catch (error) {
        console.error("Error fetching medical history:", error);
      }
    };

    fetchMedicalHistory();
  }, [url, user_id]);

  // Helper function to convert the path
  const convertPath = (path) => {
    if (!path) return ""; // Return an empty string if path is undefined or null
    return `../../../../../Backend/${path.replace(/\\/g, "/")}`;
  };

  return (
    <div className="history-container">
      {/* Heading */}
      <h1 className="history-heading">Medical History</h1>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={profile_photo} alt="Profile" className="profile-image" />
        <h2 className="profile-name">{user.name || "User"}</h2>
      </div>

      {user.name === "Guest" ? (
        <></>
      ) : (
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
              <tr key={entry.history_id || index}>
                <td>{entry.date}</td>
                <td>{entry.diagnosis}</td>
                <td>
                  <img
                    src={convertPath(entry.path)} // Ensure the URL is correct for images
                    alt={`Diagnosis for ${entry.date}`}
                    className="history-image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;

import React from "react";

import medicalImage from '../../assets/images/Front_img.png'
import './Home.css';
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="app-title">MediScan</h1>
      
      <div className="content-box">
        <img src={medicalImage} alt="Medical Illustration" className="home-image" />
        
        <div className="options-container">
          <p>If you already registered you can continue here</p>
          <Link to="/login" className="glow-button">Continue as a User</Link>
          
          <p>If you are a guest continue here:</p>
          < Link to="/" className="glow-button guest-button">Continue as a Guest</Link>
        </div>
      </div>
    </div>
  )
}

export default Home



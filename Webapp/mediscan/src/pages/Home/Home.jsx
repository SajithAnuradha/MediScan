import React from "react";
import medicalImage from '../../assets/images/Front_img.png'
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="app-title">MediScan</h1>
      
      <div className="content-box">
        <img src={medicalImage} alt="Medical Illustration" className="home-image" />
        
        <div className="options-container">
          <p>If you already registered you can continue here</p>
          <button className="glow-button">Continue as a User</button>
          
          <p>If you are a guest continue here:</p>
          <button className="glow-button guest-button">Continue as a Guest</button>
        </div>
      </div>
    </div>
  )
}

export default Home
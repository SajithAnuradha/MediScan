import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <h1>MediScan</h1>
      <img src="path-to-your-image.jpg" alt="Medical Illustration" />
      <p>If you already registered you can continue here</p>
      <Link to="/login" className="btn">
        Continue as a User
      </Link>
      <p>If you are a guest continue here:</p>
      <Link to="/" className="btn btn-guest">
        Continue as a Guest
      </Link>
    </div>
  );
};

export default Home;

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Login.css';
import doctorsImage from '../../assets/images/2.1.jpg'
import google_icon from '../../assets/images/google_img.png'
import facebook_icon from '../../assets/images/facebook_img.png'
import apple_icon from '../../assets/images/apple_img.png'
import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Login.css"; // Import the CSS file
import axios from "axios";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { url, setToken, setUser } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/auth/login`, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setToken(response.data.token);
          setUser(response.data.user);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Add logic to handle login
  };

  return (
    <div className="login-container">

      {/* App Heading */}
      <h1 className="app-heading">Mediscan</h1>
      
      <div className="login-card">
        {/* Top Image */}
        <div className="login-image">
          <img src={doctorsImage} alt="Doctors" className="image" />
        </div>

        {/* Login Title */}
        <h2 className="login-title">Login</h2>

        {/* Social Login Buttons */}
        <div className="social-login-buttons">
          <button className="social-button">
            <img src={google_icon} alt="Google" className="social-icon" />
          </button>
          <button className="social-button">
            <img src={facebook_icon} alt="Facebook" className="social-icon" />
          </button>
          <button className="social-button">
            <img src={apple_icon} alt="Apple" className="social-icon" />
          </button>
        </div>

        <div className="login-text">Or, Login with your Email</div>

        

     
      <form className="login-form" onSubmit={onSubmitHandler}>
        <div className="input-group">

          <input
            type="email"
            name="email"
            placeholder="Email ID"

            className="input-field"
          />

            value={data.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="input-group">

          <input
            type="password"
            name="password"
            placeholder="Password"

            className="input-field"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="signup-redirect">
          <div className="signup-text">Don't have an account?</div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>

            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button type="submit" className="btn login-btn">
          Login
        </button>
      </form>
      <p>Or, login with</p>
      <div className="social-login">
        <button className="social-btn google">Google</button>
        <button className="social-btn facebook">Facebook</button>
        <button className="social-btn apple">Apple</button>
      </div>
      <p>
        New to this platform? <a href="/register">Register</a>
      </p>

    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Signin.css';
import doctorsImage from '../../assets/images/2.1.jpg'
import google_icon from '../../assets/images/google_img.png'
import facebook_icon from '../../assets/images/facebook_img.png'
import apple_icon from '../../assets/images/apple_img.png'

const Signin = () => {
  const { url, setToken, setUser } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    phonenumber: "",
    gender: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    const response = await axios.post(`${url}/auth/signup`, data);

    console.log(response);
    if (response.status === 201) {
      console.log(response.data);
      setToken(response.data.token);
      setUser(response.data.user);
    } else {
      console.log("error");
    }
  };

 
  return (
    <div className="signup-container">
      {/* App Heading */}
      <h1 className="app-heading">Mediscan</h1>
      
      <div className="signup-card">
        {/* Top Image */}
        <div className="signup-image">
          <img src={doctorsImage} alt="Doctors" className="image" />
        </div>

        {/* Sign Up Title */}
        <h2 className="signup-title">Sign up</h2>

        {/* Social Sign-up Buttons */}
        <div className="social-signup-buttons">
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

        <div className="register-text">Or, Register with an Email</div>

        {/* Input Fields */}
        <form>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email ID"
            className="input-field"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Full Name"
            className="input-field"
            onChange={onChangeHandler}
          />
          <input
            type="tel"
            name="phone"
            value={data.phone}
            placeholder="Phone Number"
            className="input-field"
           onChange={onChangeHandler}
          />
          <input
            type="number"
            name="age"
            value={data.age}
            placeholder="Age"
            className="input-field"
            onChange={onChangeHandler}
          />
          <select
            name="gender"
            value={data.gender}
            className="input-field"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            className="input-field"
           onChange={onChangeHandler}
          />
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm Password"
            className="input-field"
           onChange={onChangeHandler}
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        
        <div className="login-redirect">
          <div className="login-text">Already have an account?</div>
          <button className="login-button">Login</button>
        </div>
      </div>

  

  
    </div>
  );
};

export default Signin;

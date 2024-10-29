import React, { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./Signin.css";
import doctorsImage from "../../assets/images/2.1.jpg";
import google_icon from "../../assets/images/google_img.png";
import facebook_icon from "../../assets/images/facebook_img.png";
import apple_icon from "../../assets/images/apple_img.png";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { url, setToken, setUser } = useContext(StoreContext);
  const Navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    phonenumber: "",
    gender: "",
    confirmPassword: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${url}/auth/signup`, data);

      if (response.status === 201) {
        setToken(response.data.token);
        setUser(response.data);
        Navigate("/home");
      } else {
        console.log("Error: ", response.status);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="app-heading">Mediscan</h1>
      <div className="signup-card">
        <div className="signup-image">
          <img src={doctorsImage} alt="Doctors" />
        </div>

        <div className="signup-details">
          <h2 className="signup-title">Sign up</h2>

          <form onSubmit={handleSubmit}>
            <div className="details-sign">
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email ID"
                className="input-field"
                onChange={onChangeHandler}
                autoComplete="off"
              />
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Full Name"
                className="input-field"
                onChange={onChangeHandler}
                autoComplete=""
              />
              <input
                type="tel"
                name="phonenumber"
                value={data.phonenumber}
                placeholder="Phone Number"
                className="input-field"
                onChange={onChangeHandler}
                autoComplete=""
              />
            </div>
            <div className="details-sign">
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
                autoComplete=""
              />
              <input
                type="number"
                name="age"
                value={data.age}
                placeholder="Age"
                className="input-field"
                onChange={onChangeHandler}
                autoComplete=""
              />
            </div>

            <select
              name="gender"
              value={data.gender}
              className="input-field"
              onChange={onChangeHandler}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>

          <div className="login-redirect">
            <div className="login-text">Already have an account?</div>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

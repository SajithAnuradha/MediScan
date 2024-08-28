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
      <h1>MediScan</h1>
      <img src="path-to-your-image.jpg" alt="Medical Illustration" />
      <form className="login-form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
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

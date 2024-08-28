import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Signin = () => {
  const { url, setToken, setUser } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    address: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="sign">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

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
    <div className="sign">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Username"
          value={data.name}
          onChange={onChangeHandler}
          required
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={data.age}
          onChange={onChangeHandler}
          required
        />

        <input
          name="email"
          type="text"
          placeholder="email"
          value={data.email}
          onChange={onChangeHandler}
          required
        />
        <input
          name="phonenumber"
          type="text"
          placeholder="Phonenumber"
          value={data.phonenumber}
          onChange={onChangeHandler}
          required
        />
        <input
          name="gender"
          type="text"
          placeholder="gender"
          value={data.gender}
          onChange={onChangeHandler}
          required
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={data.password}
          onChange={onChangeHandler}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

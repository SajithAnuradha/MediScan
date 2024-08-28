import React, { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const Add = () => {
  const { url, token } = useContext(StoreContext);
  const [image, setImage] = useState(null); // Set initial state to null
  const [data, setData] = useState({
    name: "",
    addhistory: false,
  });

  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onImageChange = (event) => {
    setImage(event.target.files[0]); // Handle image file selection
    console.log(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file_upload", image);

    // const requestOptions = {
    //   method: "POST",
    //   body: formData,
    // };
    // fetch(`${url}/brain`, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));

    try {
      const endpoint = `${url}/brain`;
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={data.name}
          onChange={onChangeHandler}
          required
        />
        <input
          type="checkbox"
          name="addhistory"
          checked={data.addhistory}
          onChange={onChangeHandler}
        />
        Add to Your history
        <input
          type="file"
          name="image"
          onChange={onImageChange}
          accept=".jpg, .jpeg, .png"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;

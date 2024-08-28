import React, { useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import './Add.css';

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
    <div className="add-container">
      <h1 className="page-title">Import Photo</h1>
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
        <button  className="generate-report-button" type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Add;

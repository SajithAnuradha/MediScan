import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Add.css"; // Import the CSS file
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Add = ({ title }) => {
  const { url, setResult, user, result } = useContext(StoreContext);
  // Get the base URL from context
  const [image, setImage] = useState(null); // Set initial state to null
  const [preview, setPreview] = useState(null); // State for the image preview
  const [data, setData] = useState({
    addhistory: false,
  });

  // Handle input changes for the checkbox
  const onChangeHandler = (event) => {
    const { name, checked } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Handle image selection
  const onImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file); // Set selected image file

    // Create a preview URL for the selected image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("file_upload", image);
    // formData.append("addhistory", data.addhistory);
    // console.log(user.user_id);
    // formData.append("userID", user.user_id);

    // Declare the endpoint variable here
    let endpoint = `${url}/ct`; // Default to CT scan endpoint

    try {
      if (title === "SKIN SCAN") {
        endpoint = `${url}/skin`;
      } else if (title === "MRI SCAN") {
        endpoint = `${url}/mri`;
      } else if (title === "CT SCAN") {
        endpoint = `${url}/ct`;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      console.log(response.data);
      const result = await response.json();

      if (title != "MRI SCAN") {
        setResult(result);
      } else if (title === "MRI SCAN") {
        if (result.diagnosis == "True") {
          setResult(`You are diagnosed with Brain Tumor`);
        } else {
          setResult(`You are NOT diagnosed with  Brain Tumor`);
        }
      } else {
        console.error("Failed to upload image");
      }

      if (data.addhistory) {
        submitHistory(result);
      }
    } catch (error) {
      console.error("An error occurred during upload:", error);
    }
  };

  const submitHistory = async (result) => {
    const history = await axios.post(`${url}/history/add`, {
      user_id: user.user_id,
      diagnosis: result.diagnosis,
      path: result.path,
      date: result.date,
    });
    console.log(history);
  };

  return (
    <div className="add">
      <h1 className="page-title">{`Import Photo for ${title}`}</h1>
      <div className="add-container">
        <div>
          <h1>{`Upload Photo for ${title}`}</h1>
          <form onSubmit={onSubmitHandler}>
            {/* Image Preview Section */}
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Selected" className="preview-img" />
              </div>
            )}
            {user.name === "Guest" ? (
              <></>
            ) : (
              <label>
                <input
                  type="checkbox"
                  name="addhistory"
                  checked={data.addhistory}
                  onChange={onChangeHandler}
                />
                Add to Your History
              </label>
            )}

            <input
              type="file"
              name="image"
              onChange={onImageChange}
              accept=".jpg, .jpeg, .png"
              required
            />
            <button className="generate-report-button" type="submit">
              Generate Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

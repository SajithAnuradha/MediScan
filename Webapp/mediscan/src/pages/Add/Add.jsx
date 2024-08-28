import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Add = () => {
  const { url } = useContext(StoreContext);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    addhistory: false,
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const addhsitory = event.target.addhsitory;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.addhistory);

    const response = await axios.post(`${url}/add`, formData);
    if (response.status === 200) {
      setData({
        name: "",
        addhistory: false,
      });
      setImage(false);
    } else {
      console.log("error");
    }
  };

  return <div>Add</div>;
};

export default Add;

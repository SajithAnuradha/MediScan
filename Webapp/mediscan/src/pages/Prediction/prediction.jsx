import React from "react";
import "./Prediction.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Prediction = () => {
  const { token, result } = useContext(StoreContext);

  return (
    <div className="prediction-container">
      <h1 className="results-heading">Results</h1>
      <div className="prediction-box">
        <h2 className="prediction-title">Prediction </h2>
        <p className="prediction-content">
          {`This is the result for your uploaded image: ${result}`}
        </p>
        <Link to="/home" className="prediction-title">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Prediction;

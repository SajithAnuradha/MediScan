import React from "react";
import './Prediction.css';








const Prediction = () => {
  return(
    <div className="prediction-container">
      <h1 className="results-heading">Results</h1>
      <div className="prediction-box">
        <h2 className="prediction-title">Prediction Box 1</h2>
        <p className="prediction-content">Content for Prediction Box 1</p>
      </div>
      <div className="prediction-box">
        <h2 className="prediction-title">Prediction Box 2</h2>
        <p className="prediction-content">Content for Prediction Box 2</p>
      </div>
    </div>
  )
};

export default Prediction;

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Confident.css";

const Confident = ({ confidence }) => {
  return (
    <div className="confident-container">
      <h2>Model Recall</h2>
      <div className="progress-circle">
        <CircularProgressbar
          value={confidence}
          text={`${confidence}%`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: `rgba(0, 0, 0, ${confidence / 100})`, // Dark blue color
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div className="paragraph">
        <h3>
        Recall is a measure of how good the model is at catching all the cases it’s supposed to find. It shows how often the model correctly spots what it's looking for among all the true cases.
        </h3>
      </div>
    </div>
  );
};

export default Confident;

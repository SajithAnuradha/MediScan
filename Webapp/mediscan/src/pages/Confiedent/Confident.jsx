import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Confident.css";

const Confident = ({ confidence }) => {
  return (
    <div className="confident-container">
      <h2>Model Confidence</h2>
      <div className="progress-circle">
        <CircularProgressbar
          value={confidence}
          text={`${confidence}%`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: `rgba(62, 152, 199, ${confidence / 100})`,
            trailColor: "#d6d6d6",
          })}
        />
      </div>
    </div>
  );
};

export default Confident;

import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Confident.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Confident = ({ title }) => {
  const { token, user, result } = useContext(StoreContext);
  const [confidence, setConfidence] = React.useState(0);
  useEffect(() => {
    if (title === "SKIN SCAN") {
      setConfidence(77);
    } else if (title === "CT SCAN") {
      setConfidence(80);
    } else {
      setConfidence(93.67);
    }
  }, [title]);

  useEffect(() => {
    if (result) {
      handleConfidence();
    }
  }, [result]);

  const handleConfidence = () => {
    if (title === "CT SCAN") {
      if (result == "adenocarcinoma") {
        setConfidence(57);
      } else if (result == "large-cell-carcinoma") {
        setConfidence(100);
      } else if (result == "squamous-cell-carcinoma") {
        setConfidence(93);
      } else {
        setConfidence(90);
      }
    } else if (title === "SKIN SCAN") {
      if (result == "acne") {
        setConfidence(88);
      } else if (result == "actinic") {
        setConfidence(63);
      } else {
        setConfidence(84);
      }
    }
  };

  return (
    <div className="confident-container">
      {result ? <h2>Model Recall</h2> : <h2>Model Weighted Recall</h2>}
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
          Recall is a measure of how good the model is at catching all the cases
          it’s supposed to find. It shows how often the model correctly spots
          what it's looking for among all the true cases.
        </h3>
      </div>
    </div>
  );
};

export default Confident;

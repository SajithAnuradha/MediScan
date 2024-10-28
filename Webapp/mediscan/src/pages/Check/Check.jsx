import React from 'react';

import './Check.css';
import Add from '../Add/Add';
import Prediction from '../Prediction/Prediction';
import Confident from '../Confiedent/Confident';

const Check = ({ title }) => {
    return (
      <>
        <div className="app-container">
          <header className="header">
            <h1 className="app-logo">{title}</h1>
          </header>
        </div>
        <div className="check-container"> {/* Added class for flex container */}
          <div className="Add">
            <Add title={title} />
          </div>
          <div className="model-prediction">
            <Prediction />
          </div>
          <div className="model-confident">
            <Confident confidence={65} />
          </div>
        </div>
      </>
    );
  }
  

export default Check;

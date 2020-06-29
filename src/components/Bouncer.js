import React from "react";
import "./bouncer.css";
const Bouncer = () => {
  return (
    <React.Fragment>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </React.Fragment>
  );
};

export default Bouncer;

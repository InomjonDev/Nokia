import React from "react";
import "./Highlites.css";

function Highlites() {
  return (
    <div className="highlites-bg">
      <div className="highlites container">
        <div className="highlites-count">
          <h1 className="highlites-title">3.0M</h1>
          <p className="highlites-text">student hours delivered</p>
        </div>
        <div className="highlites-county">
          <h1 className="highlites-title">137+</h1>
          <p className="highlites-text">countries</p>
        </div>
        <div className="highlites-persent">
          <h1 className="highlites-title">97.7%</h1>
          <p className="highlites-text">
            student satisfaction (instructor-led training)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlites;

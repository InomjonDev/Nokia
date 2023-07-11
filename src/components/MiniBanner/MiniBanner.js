import React from "react";
import "./MiniBanner.css";
import { useLocation } from "react-router-dom";

function MiniBanner({ img, title, text }) {
  return (
    <>
      <div
        className="minibanner"
        style={{ backgroundImage: `url(${img})`, height: "390px" }}
      >
        <div className="minibanner__container">
          <div className="minibanner__title-wrapper">
            <p className="minibanner__title">{title}</p>
          </div>
          <div className="minibanner__wrapper">
            <p className="minibanner__text">{text}</p>
          </div>
          <button className="btn">Global Contact Center</button>
        </div>
      </div>
    </>
  );
}

export default MiniBanner;

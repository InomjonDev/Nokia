import React from "react";
import "./Banner.css";

function Banner({ img, title, text }) {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${img})` }}>
        {/* <div className="banner__title"> */}
        <div className="banner__container">
          <div className="banner__title-wrapper">
            <p className="banner__title">{title}</p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="container">
        <div className="banner__wrapper">
          <p className="banner__text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;

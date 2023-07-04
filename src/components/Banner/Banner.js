import React from "react";
import "./Banner.css";

function Banner({ img, title }) {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${img})` }}>
        <div className="banner__title">
          <div className="container">
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="banner__wrapper">
          <p className="banner__text">
            Nokia is a B2B technology innovation leader pioneering the future
            where networks meet cloud. We are making high-performance
            connectivity more consumable and sustainable while also securely
            opening up networks for innovation and collaboration.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;

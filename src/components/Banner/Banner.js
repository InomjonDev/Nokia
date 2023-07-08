import React from "react";
import "./Banner.css";
import { useLocation } from "react-router-dom";

function Banner({ img, title, text }) {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("/training") ? (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${img})`, height: "400px" }}
          >
            <div className="banner__container">
              <div className="banner__title-wrapper">
                <p className="banner__title">
                  <span className="fz60">NokiaEDU</span> <br />
                  <span className="fz60">Learn. Perform. Share.</span> <br />
                  <span className="fz32">Enter a new age in learning</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${img})`, height: "250px" }}
          >
            <div className="banner__container">
              <div className="banner__title-wrapper">
                <p className="banner__title">{title}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="banner__wrapper">
              <p className="banner__text">{text}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Banner;

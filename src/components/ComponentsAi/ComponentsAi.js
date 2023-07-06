import React from "react";
import "./ComponentsAi.css";

function ComponentsAi() {
  return (
    <div className="componentai container">
      <div className="componentai__wrapper">
        <ul className="componentai__list">
          <li className="componentai__item active">
            <a href="#">AI and operations</a>
          </li>
          <li className="componentai__item">
            <a href="#">Core</a>
          </li>
          <li className="componentai__item">
            <a href="#">Fixed access</a>
          </li>
          <li className="componentai__item">
            <a href="#">IP and optical transport</a>
          </li>
          <li className="componentai__item">
            <a href="#">Mobile networks</a>
          </li>
          <li className="componentai__item">
            <a href="#">Security</a>
          </li>
          <li className="componentai__item">
            <a href="#">All topics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComponentsAi;

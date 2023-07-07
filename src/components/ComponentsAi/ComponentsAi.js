import React from "react";
import "./ComponentsAi.css";
import { ComAi } from "../../static/componentai";
import { HiOutlineArrowRight } from "react-icons/hi";

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
        <div className="componentai__body">
          <div className="componentai__title">
            <h3>AI and operations</h3>
          </div>
          <div className="componentai__text">
            Need to make your operational processes more efficient? Discover the
            solutions that provide AI-powered services and network operations to
            digitalize your operations.
          </div>
          <div className="componentai__card">
            {ComAi?.map(item => (
              <div className="componentai__card-item" key={item.id}>
                <div className="componentai__card-body">
                  <div className="componentai__card-title">
                    <h4>
                      {item.title}
                      <HiOutlineArrowRight />
                    </h4>
                  </div>
                  <div className="componentai__card-desc">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentsAi;

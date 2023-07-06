import React from "react";
import "./Card.css";
import { HiOutlineArrowRight } from "react-icons/hi";

function Card({ data }) {
  return (
    <div className="container card">
      <div className="card__wrapper">
        {data?.map(item => (
          <div className="card__item" key={item.id}>
            <div className="card__img">
              <img src={item.img} alt="" />
            </div>
            <div className="card__title">
              <h2>{item.title}</h2>
              <HiOutlineArrowRight />
            </div>
            <div className="card__text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "./MiniCard.css";
import { HiOutlineArrowRight } from "react-icons/hi";

function MiniCard({ data }) {
  return (
    <div className="container minicard">
      <div className="minicard__wrapper">
        {data?.map(item => (
          <div className="minicard__item" key={item.id}>
            <div className="minicard__img">
              <img src={item.img} alt="" />
            </div>
            <div className="minicard__title">
              <h2>{item.title}</h2>
              <HiOutlineArrowRight />
            </div>
            <div className="minicard__text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniCard;

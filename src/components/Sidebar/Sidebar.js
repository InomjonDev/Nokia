import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";

function Sidebar({ show, setShow }) {
  const items = [
    {
      id: "item-1",
      title: "Products",
      link: "/products",
    },
    {
      id: "item-2",
      title: "Services",
      link: "/services",
    },
    {
      id: "item-3",
      title: "Training",
      link: "/training",
    },
  ];
  return (
    <>
      {show ? (
        <div className="sidebar__shadow" onClick={() => setShow(false)}></div>
      ) : (
        <></>
      )}

      <div className={`sidebar ${show ? "show" : ""}`}>
        {items?.map(item => (
          <ul className="sidebar__list" key={item.id}>
            <li className="sidebar__item">
              <Link to={item.link}>{item.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Sidebar;

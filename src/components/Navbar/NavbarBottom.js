import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import Logo from "../../assets/logo/logo.svg";
import { LiaSearchSolid } from "react-icons/lia";
import Sidebar from "../Sidebar/Sidebar";

function NavbarBottom() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar__bottom">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="navbar__bottom-list">
          <li className="navbar__bottom-item">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="navbar__bottom-item">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="navbar__bottom-item">
            <Link to={"/training"}>Training</Link>
          </li>
        </ul>
        <div className="navbar__bottom-languages">
          <div className="navbar__bottom-language">
            <CiGlobe fill="#0164ed" />
          </div>
          <div className="navbar__bottom-language">
            <LiaSearchSolid fill="#0164ed" />
          </div>
        </div>
        <button className="navbar__bottom-menu" onClick={() => setShow(true)}>
          <AiOutlineMenu fill="#0164ed" />
        </button>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
}

export default NavbarBottom;

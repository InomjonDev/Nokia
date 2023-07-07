import React from "react";
import Logo from "../../assets/logo/logo.svg";
import { TfiArrowTopRight } from "react-icons/tfi";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import "./Footer.css";

function Footer() {
  return (
    <div className="bg">
      <div className="footer container">
        <div className="footer__top">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom-actions">
            <div className="footer__bottom-actions-item">
              <p>Looking for Nokia licensed products?</p>
              <a href="#">
                <TfiArrowTopRight fill="#005aff" />
                <span className="fwb">Explore consumer devices</span>
              </a>
            </div>
            <div className="footer__bottom-actions-item">
              <a href="#">Standardization</a>
              <a href="#">Experience centers</a>
            </div>
            <div className="footer__bottom-actions-item">
              <a href="#">Nokia EDU and training</a>
            </div>
            <div className="footer__bottom-actions-item">
              <a href="#">Sustainability</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__main">
          <div className="footer__main-links">
            <ul className="footer__main-links-list">
              <li className="footer__main-links-item fwb">
                <a href="#">Contact us</a>
              </li>
              <li className="footer__main-links-item fwb">
                <a href="#">Support</a>
              </li>
              <li className="footer__main-links-item fwb">
                <a href="#">Extranet Access</a>
              </li>
            </ul>
          </div>
          <div className="footer__main-icons">
            <div className="footer__main-btn-block">
              <a href="#" className="footer__main-btn">
                Subscribe for our latest news
              </a>
            </div>
            <ul className="footer__main-list">
              <li>
                <a href="#" className="footer__main-item">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="footer__main-item">
                  <AiFillYoutube />
                </a>
              </li>
              <li>
                <a href="#" className="footer__main-item">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="footer__main-item">
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="footer__main-item">
                  <BiLogoLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer__highlites">
          <p className="footer__highlites-text">
            ©2023 Nokia all rights reserved
          </p>
          <p className="footer__highlites-item">Cookies</p>
          <p className="footer__highlites-item">Privacy</p>
          <p className="footer__highlites-item">Terms of use</p>
          <p className="footer__highlites-item">Inclusive terminology</p>
          <p className="footer__highlites-item">Modern slavery statement</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

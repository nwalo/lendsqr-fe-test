import React from "react";
import Logo from "../assets/images/Group.svg";
import Avatar from "../assets/images/avatar.svg";
import Vector from "../assets/icons/Vector.svg";
import SearchIcon from "../assets/icons/search.svg";
import CaretIcon from "../assets/icons/caret.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./Nav.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__bar nav__j-between nav__a-center">
        <ul className="nav__item nav__full">
          <li>
            <a href="/">
              <img className="nav__logo" src={Logo} alt="" />
            </a>
          </li>
          <button
            className="nav__menu"
            style={{
              padding: 0,
              background: "transparent",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <AiOutlineMenuFold style={{ fontSize: "1.4em", padding: 0 }} />
          </button>
        </ul>
        <li className="nav__item">
          <button className="nav__search-btn">
            <img className="" src={SearchIcon} alt="" />
          </button>
          <input
            type="text"
            className="nav__search"
            placeholder="Search for anything"
          />
        </li>
        <li className="show__desk  ">
          <ul className="nav__j-between nav__a-center">
            <li className="nav__item">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </li>
            <li className="nav__item nav__bell" style={{}}>
              <a href="/" rel="noopener noreferrer">
                <img src={Vector} alt="" />
              </a>
            </li>
            <li className="nav__item">
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="/"
                  style={{ marginRight: "5px" }}
                  rel="noopener noreferrer"
                >
                  <img src={Avatar} alt="" />
                </a>
                <p>
                  <span style={{ marginRight: "5px" }}>Ayodeji</span>
                  <img src={CaretIcon} alt="" />
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

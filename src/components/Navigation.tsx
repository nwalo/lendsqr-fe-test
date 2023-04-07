import React, { useState } from "react";
import Logo from "../assets/images/Group.svg";
import Avatar from "../assets/images/avatar.svg";
import Vector from "../assets/icons/Vector.svg";
import SearchIcon from "../assets/icons/search.svg";
import CaretIcon from "../assets/icons/caret.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./Nav.scss";
import Popover from "@mui/material/Popover";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [showMenuList, setShowMenuList] = useState(true);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleMenuBar = () => {
    setShowMenuList(!showMenuList);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <nav className="nav">
      <ul className="nav__bar nav__j-between nav__a-center">
        <ul
          className="nav__item nav__full "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li>
            <a href="/">
              <img className="nav__logo" src={Logo} alt="" />
            </a>
          </li>
          <li className="" style={{ position: "relative" }}>
            <button className="nav__search-btn">
              <img className="" src={SearchIcon} alt="" />
            </button>
            <input
              type="text"
              className="nav__search"
              placeholder="Search for anything"
            />
          </li>
          <li>
            <button
              className="nav__menu"
              style={{
                padding: 0,
                background: "transparent",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleMenuBar}
            >
              <AiOutlineMenuFold style={{ fontSize: "2em", padding: 0 }} />
            </button>
          </li>
        </ul>
        {/* <li className="nav__item">
          <button className="nav__search-btn">
            <img className="" src={SearchIcon} alt="" />
          </button>
          <input
            type="text"
            className="nav__search"
            placeholder="Search for anything"
          />
        </li> */}
        <li className={showMenuList ? "show__desk" : ""}>
          <ul className="nav__j-between nav__a-center">
            <li className="nav__item">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </li>
            <li className="nav__item " style={{}}>
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
                <Button
                  aria-describedby={id}
                  onClick={handleClick}
                  // variant="contained"
                >
                  <span style={{ marginRight: "5px" }}>Ayodeji</span>
                  <img src={CaretIcon} alt="" />
                </Button>
              </div>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <p onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Logout
                  </p>
                </Typography>
              </Popover>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

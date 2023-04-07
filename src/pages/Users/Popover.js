import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import dot from "../../assets/icons/dot.svg";
import Blacklist from "../../assets/icons/blacklist.svg";
import Activate from "../../assets/icons/activate.svg";
import Eye from "../../assets/icons/eye.svg";
import { useNavigate } from "react-router-dom";

export default function BasicPopover({ data, dataIndex, handleDotClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isHover, setIsHover] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const popItems = [
    {
      img: Eye,
      title: "View Details",
    },
    { img: Blacklist, title: "Blacklist User" },
    { img: Activate, title: "Activate User" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (event, data, action) => {
    console.log(data, action);

    const storedUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (action === "View Details") {
      return navigate(`/user/${data + 1}`);
    }
    if (action === "Activate User") {
      storedUsers[data].status = "active";
    }
    if (action === "Blacklist User") {
      storedUsers[data].status = "blacklisted";
    }
    localStorage.setItem("allUsers", JSON.stringify(storedUsers));
    setAllUsers(storedUsers);
    handleDotClick();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = (e, i, index) => {
    setIsHover((c) => {
      return {
        ...c,
        [index]: true,
      };
    });
  };

  const handleMouseLeave = (e, i, index) => {
    setIsHover((c) => {
      return {
        ...c,
        [index]: false,
      };
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const Users = JSON.parse(localStorage.getItem("allUsers"));
    // console.log(Users);
    setAllUsers(Users);
  }, []);

  useEffect(() => {
    // console.log(allUsers);
    // localStorage.setItem("allUsers", JSON.stringify(allUsers));
    // console.log("allUsers");
  }, [allUsers]);

  return (
    <div>
      <div
        aria-describedby={id}
        style={{ width: "fit-content" }}
        onClick={handleClick}
      >
        <img className="dots__dot" src={dot} alt="" />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="">
            <ul className="dots__popup">
              {popItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      textDecoration: isHover[index] ? "underline" : "none",
                    }}
                    onClick={(e) => handleItemClick(e, dataIndex, item.title)}
                    onMouseEnter={(e) => handleMouseEnter(e, data, index)}
                    onMouseLeave={(e) => handleMouseLeave(e, data, index)}
                  >
                    <img className="dots__dot" src={item.img} alt="" />{" "}
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}

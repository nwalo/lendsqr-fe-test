import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import dot from "../../assets/icons/dot.svg";
import Blacklist from "../../assets/icons/blacklist.svg";
import Activate from "../../assets/icons/activate.svg";
import Eye from "../../assets/icons/eye.svg";

export default function BasicPopover({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isHover, setIsHover] = useState(false);

  const popItems = [
    {
      img: Eye,
      title: "View Details",
    },
    { img: Blacklist, title: "Blacklist User" },
    { img: Activate, title: "Activate User" },
  ];

  const handleClick = (event, data) => {
    setAnchorEl(event.currentTarget);
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

  return (
    <div>
      <div aria-describedby={id} variant="contained" onClick={handleClick}>
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
                    style={{
                      textDecoration: isHover[index] ? "underline" : "none",
                    }}
                    onClick={(e) => handleClick(e, data)}
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

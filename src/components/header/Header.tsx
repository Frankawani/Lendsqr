import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Logo = require("../../images/Group.png") as string;
const Profilepic = require("../../images/image 4.png") as string;

function Header() {
  return (
    <header>
      <div className="header__div1">
        <img src={Logo} alt="" className="header__logo" />
        <div className="header__searchDiv">
          <input
            type="text"
            placeholder="search for anything"
            className="header__input"
          />
          <SearchIcon className="searchIcon" />
        </div>
      </div>
      <div className="header__div2">
        <div className="headerDiv2__one">
          <p className="header__docs">Docs</p>
          <NotificationsNoneIcon />
        </div>
        <div className="headerDiv2__two">
          <img
            src={Profilepic}
            alt="profile pic"
            className="header__profilePic"
          />
          <p>Adedeji</p>
          <ArrowDropDownIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;

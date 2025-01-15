import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/youtube-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faBars,
  faBell,
  faMicrophone,
  faCirclePlay,
  faPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DropDownCreate from "./DropDownCreate";

const Navbar = ({ setSidebar }) => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <button className="menu-btn">
            <FontAwesomeIcon
              icon={faBars}
              className="menu-icon"
              onClick={() =>
                setSidebar((prev) => (prev === false ? true : false))
              }
            />
          </button>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        {/* Search nav */}
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <div className="icon">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
          </div>
          <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />

        </div>

        <div className="nav-right flex-div">
          <div className="create-container">

            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            <span onClick={() => setOpenProfile((prev) => !prev)}>Create</span>

          </div>
          {openProfile && <DropDownCreate />}

          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>
      </nav>
    
    </div>

  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/youtube-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownCreate from "./DropDownCreate";

import {
  faAddressCard,
  faBars,
  faBell,
  faCircleQuestion,
  faDollarSign,
  faGear,
  faGlobe,
  faKeyboard,
  faLanguage,
  faMicrophone,
  faCirclePlay,
  faPlus,
  faRightFromBracket,
  faSearch,
  faShield,
  faTriangleExclamation,
  faUser,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toogleDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search term!");
    } else {
      navigate(`/feed?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
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
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
        <button className="microphone-btn">
          <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />
        </button>
      </div>
      <div className="nav-right flex-div">
        <div className="create-container">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          <span onClick={() => setOpenProfile((prev) => !prev)}>Create</span>
        </div>
        {openProfile && <DropDownCreate />}
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
        <div className="user-dropdown-container">
          <FontAwesomeIcon
            icon={faUser}
            className="user-icon"
            onClick={toogleDropdown}
          />
          {userDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
                Google Account
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                Switch account
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
                Sign out
              </div>
              <hr />
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faSquareYoutube} className="icon" />
                Youtube Studio
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                Your Premium benefits
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faUserShield} className="icon" />
                Purchases and memberships
              </div>
              <hr />
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faMoon} className="icon" />
                Appearance: Device theme
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faLanguage} className="icon" />
                Language: English
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faShield} className="icon" />
                Restricted Mode: Off
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                Location: Vietnam
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faKeyboard} className="icon" />
                Keyboard shortcuts
              </div>
              <hr />
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faGear} className="icon" />
                Setting
              </div>
              <hr />
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
                Help
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="icon"
                />
                Send feedback
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

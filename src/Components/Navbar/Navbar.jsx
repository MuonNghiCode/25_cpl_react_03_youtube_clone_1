import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/youtube-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faMoon,
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
          <span>Create</span>
        </div>
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
                Tài khoản Google
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                Chuyển đổi tài khoản
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
                Đăng xuất
              </div>
              <div className="divider"></div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faSquareYoutube} className="icon" />
                Youtube Studio
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                Giao dịch và mua gói thành viên
              </div>
              <div className="divider"></div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faUserShield} className="icon" />
                Dữ liệu của bạn trong Youtube
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faMoon} className="icon" />
                Giao diện: Đen
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faLanguage} className="icon" />
                Ngôn ngữ: Tiếng việt
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faShield} className="icon" />
                Chế độ hạn chế: Đã tắt
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                Địa điểm: Việt Nam
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faKeyboard} className="icon" />
                Phím tắt
              </div>
              <div className="divider"></div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faGear} className="icon" />
                Cài đặt
              </div>
              <div className="divider"></div>
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
                Trợ giúp
              </div>
              <div className="dropdown-item">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="icon"
                />
                Gửi ý kiến phản hồi
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

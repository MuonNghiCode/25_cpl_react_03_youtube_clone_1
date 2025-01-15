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

const Navbar = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const toogleDropdown = () => {
    setUserDropdown(!userDropdown);
  };
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <button className="menu-btn">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <img className="logo" src={logo} alt="logo" />
      </div>
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

import React from "react";
import "./music.css";
import thumbnail1 from "../../assets/music1.jpg";
import thumbnail2 from "../../assets/music2.jpg";
import thumbnail3 from "../../assets/music3.jpg";
import thumbnail4 from "../../assets/music4.jpg";
import thumbnail5 from "../../assets/music5.jpg";
import thumbnail6 from "../../assets/music6.jpg";
import thumbnail7 from "../../assets/music7.jpg";
import thumbnail8 from "../../assets/music8.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";


const musicComponents = () => {
  return (
    <div className="music">
      <Link to={`track/1`} className="card">
        <img src={thumbnail1} alt="album1" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Kings & Queens</h2>
          </div>
          <div className="card-content-text">
            <h3>Song by Ava Max</h3>
            <p>Ava Max (27 Mar 2020)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/2`} className="card">
        <img src={thumbnail2} alt="album2" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Giờ Thì</h2>
          </div>
          <div className="card-content-text">
            <h3>buitruonglinh</h3>
            <p>Từng Ngày Như Mãi Mãi (2024)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/3`} className="card">
        <img src={thumbnail3} alt="album3" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Mất Kết Nối</h2>
          </div>
          <div className="card-content-text">
            <h3>Dương Domic</h3>
            <p>Dữ Liệu Quý (2024)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/4`} className="card">
        <img src={thumbnail4} alt="album4" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>
              Chúng Ta Sau Này</h2>
          </div>
          <div className="card-content-text">
            <h3>T.R.I</h3>
            <p>Chúng Ta Sau Này (2021)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/5`} className="card">
        <img src={thumbnail5} alt="album5" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Liệu Giờ</h2>
          </div>
          <div className="card-content-text">
            <h3>2T x Venn</h3>
            <p>Liệu Giờ (2019)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/6`} className="card">
        <img src={thumbnail6} alt="album6" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Lưu Luyến Sau Chia Tay</h2>
          </div>
          <div className="card-content-text">
            <h3>Try92 ft. Kai06</h3>
            <p>Album Name (release date)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/7`} className="card">
        <img src={thumbnail7} alt="album7" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>FE!N</h2>
          </div>
          <div className="card-content-text">
            <h3>Travis Scott</h3>
            <p>UTOPIA (2023)</p>
          </div>
        </div>
      </Link>
      <Link to={`track/8`} className="card">
        <img src={thumbnail8} alt="album8" />
        <div className="card-content">
          <div className="card-header">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <h2>Wrong Times</h2>
          </div>
          <div className="card-content-text">
            <h3>Dangrangto, puppy</h3>
            <p>Wrong Times (2023)</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default musicComponents;

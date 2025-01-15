import React from "react";
import "./Sidebar.css";
import home from "../../assets/icons8-home-50.png";
import shorts from "../../assets/icons8-youtube-shorts-50.png";
import subscription from "../../assets/icons8-youtube-subscriptions.png";
import music from "../../assets/icons8-youtube-music-50.png";
import history from "../../assets/clock_rotate_left_icon.png";
import playlist from "../../assets/icons8-youtube-playlist-48.png";
import video from "../../assets/icons8-youtube-100.png";
import clock from "../../assets/icons8-clock-100.png";
import like from "../../assets/thumb-up.png";
import download from "../../assets/icons8-download-64.png";
import user from "../../assets/icons8-user-48.png";
import trending from "../../assets/fire.png";
import musicnote from "../../assets/musical-note.png";
import gaming from "../../assets/icons8-youtube-gaming-50.png";
import news from "../../assets/newspaper.png";
import trophy from "../../assets/icons8-trophy-48.png";
import studio from "../../assets/icons8-youtube-studio-48.png";
import ytmusic from "../../assets/icons8-youtube-music-48.png";
import kid from "../../assets/youtube-kids.png";
import setting from "../../assets/icons8-setting-50.png";
import flag from "../../assets/icons8-flag-48.png";
import question from "../../assets/icons8-question-50.png";
import message from "../../assets/message.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home-links">
        <div className="side-link">
          <img src={home} alt="home-icon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={shorts} alt="shorts-icon" />
          <p>Shorts</p>
        </div>
        <div className="side-link">
          <img src={subscription} alt="subscription-icon" />
          <p>Subcriptions</p>
        </div>
        <div className="side-link">
          <img src={music} alt="music-icon" />
          <p>YouTube Music</p>
        </div>
        <hr />
      </div>
      <div className="personal-links">
        <div className="side-link">
          <h2>
            You <FontAwesomeIcon icon={faAngleRight} />
          </h2>
        </div>
        <div className="side-link">
          <img src={history} alt="history-icon" />
          <p>History</p>
        </div>
        <div className="side-link">
          <img src={playlist} alt="playlist-icon" />
          <p>Playlists</p>
        </div>
        <div className="side-link">
          <img src={video} alt="video-icon" />
          <p>Your Videos</p>
        </div>
        <div className="side-link">
          <img src={clock} alt="clock-icon" />
          <p>Watch later</p>
        </div>
        <div className="side-link">
          <img src={like} alt="like-icon" />
          <p>Liked videos</p>
        </div>
        <div className="side-link">
          <img src={download} alt="download-icon" />
          <p>Downloads</p>
        </div>
        <hr />
      </div>
      <div className="subscription-links">
        <div className="side-link">
          <h2>Subscriptions</h2>
        </div>
        <div className="side-link">
          <img src={user} alt="user-icon" />
          <p>Channel 1</p>
        </div>
        <div className="side-link">
          <img src={user} alt="user-icon" />
          <p>Channel 2</p>
        </div>
        <div className="side-link">
          <img src={user} alt="user-icon" />
          <p>Channel 3</p>
        </div>
        <div className="side-link">
          <img src={user} alt="user-icon" />
          <p>Channel 4</p>
        </div>
        <div className="side-link">
          <img src={user} alt="user-icon" />
          <p>Channel n</p>
        </div>
        <hr />
      </div>
      <div className="explore-links">
        <div className="side-link">
          <h2>Explore</h2>
        </div>
        <Link to="/trending" className="side-link">
          <img src={trending} alt="trending-icon" />
          <p>Trending</p>
        </Link>
        <Link to="/trending/gaming" className="side-link">
          <img src={gaming} alt="gaming-icon" />
          <p>Gaming</p>
        </Link>
        <Link to="/trending/films" className="side-link">
          <img src={trending} alt="trending-icon" />
          <p>Films</p>
        </Link>
        <div className="side-link">
          <img src={musicnote} alt="music-note-icon" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={news} alt="news-icon" />
          <p>News</p>
        </div>
        <div className="side-link">
          <img src={trophy} alt="sports-icon" />
          <p>Sports</p>
        </div>
        <hr />
      </div>
      <div className="youtube-links">
        <div className="side-link">
          <h2>More from Youtube</h2>
        </div>
        <div className="side-link">
          <img src={studio} alt="studio-icon" />
          <p>YouTube Studio</p>
        </div>
        <div className="side-link">
          <img src={ytmusic} alt="ytmusic-icon" />
          <p>YouTube Music</p>
        </div>
        <div className="side-link">
          <img src={kid} alt="kid-icon" />
          <p>YouTube Kids</p>
        </div>
        <hr />
      </div>
      <div className="setting-links">
        <div className="side-link">
          <img src={setting} alt="setting-icon" />
          <p>Setting</p>
        </div>
        <div className="side-link">
          <img src={flag} alt="flag-icon" />
          <p>Report history</p>
        </div>
        <div className="side-link">
          <img src={question} alt="question-icon" />
          <p>Help</p>
        </div>
        <div className="side-link">
          <img src={message} alt="message-icon" />
          <p>Send feedback</p>
        </div>
        <hr />
      </div>
      <div className="footer">
        <p>About Press Copyright Contact us Creators Advertise Developers</p>
        <p>Terms Privacy Policy & Safety How YouTube works</p>
        <p>Test new features</p>
        <p>© 2025 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;

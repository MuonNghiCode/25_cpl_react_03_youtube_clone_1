import React from "react";
import "../PlayVideo/PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/thumb-up.png";
import dislike from "../../assets/dislike1.png";
import share from "../../assets/share1.png";
import download from "../../assets/icons8-download-64.png";
import ellipsis from "../../assets/icons8-ellipsis-32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted />
      <h3>Video Title</h3>
      <div className="info-navbar">
        <div className="info-navbar-left">
          <div className="publiser-info">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <div className="text-container">
              <p>Channel Name</p>
              <span>Channel Description</span>
            </div>
          </div>
          <button className="join-btn">Join</button>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className="info-navbar-right">
          <div className="like-container">
            <img src={like} alt="like-icon" className="like-btn" />
            <span>1.5k</span>
            <img src={dislike} alt="dislike-icon" className="dislike-btn" />
          </div>
          <button className="share-btn">
            <img src={share} alt="share-icon" className="share-btn-icon" />
            <span>Share</span>
          </button>
          <button className="download-btn">
            <img
              src={download}
              alt="download-icon"
              className="download-btn-icon"
            />
            <span>Download</span>
          </button>
          <button className="more-btn">
            <img src={ellipsis} alt="ellipsis-icon" className="more-btn-icon" />
          </button>
        </div>
      </div>
      <div className="video-description">
        <h5>168,120 views Feb 12, 2024</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloremque, consequuntur, voluptas, quisquam, quod, doloribus
          voluptatibus, quis, aspernatur, voluptas, doloremque, consequuntur,
          voluptas, quisquam, quod, doloribus voluptatibus, quis, aspernatur,
          voluptas, doloremque, consequuntur, voluptas, quisquam, quod,
          doloribus voluptatibus, quis, aspernatur, voluptas, doloremque,
          consequuntur, voluptas, quisquam, quod, doloribus voluptatibus, quis,
          aspernatur, voluptas, doloremque, consequuntur, voluptas, quisquam,
          quod, doloribus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloremque, consequuntur, voluptas, quisquam, quod, doloribus
          voluptatibus, quis, aspernatur, voluptas, doloremque, consequuntur,
          voluptas, quisquam, quod, doloribus voluptatibus, quis, aspernatur,
          voluptas, doloremque, consequuntur, voluptas, quisquam, quod,
          doloribus voluptatibus, quis, aspernatur, voluptas, doloremque,
          consequuntur, voluptas, quisquam, quod, doloribus voluptatibus, quis,
          aspernatur, voluptas, doloremque, consequuntur, voluptas, quisquam,
          quod, doloribus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloremque, consequuntur, voluptas, quisquam, quod, doloribus
          voluptatibus, quis, aspernatur, voluptas, doloremque, consequuntur,
          voluptas, quisquam, quod, doloribus voluptatibus, quis, aspernatur,
          voluptas, doloremque, consequuntur, voluptas, quisquam, quod,
          doloribus voluptatibus, quis, aspernatur, voluptas, doloremque,
          consequuntur, voluptas, quisquam, quod, doloribus voluptatibus, quis,
          aspernatur, voluptas, doloremque, consequuntur, voluptas, quisquam,
          quod, doloribus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloremque, consequuntur, voluptas, quisquam, quod, doloribus
          voluptatibus, quis, aspernatur, voluptas, doloremque, consequuntur,
          voluptas, quisquam, quod, doloribus voluptatibus, quis, aspernatur,
          voluptas, doloremque, consequuntur, voluptas, quisquam, quod,
          doloribus voluptatibus, quis, aspernatur, voluptas, doloremque,
          consequuntur, voluptas, quisquam, quod, doloribus voluptatibus, quis,
          aspernatur, voluptas, doloremque, consequuntur, voluptas, quisquam,
          quod, doloribus
        </p>
      </div>
      <div className="comment">
        <h4>Comments</h4>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
        <div className="comment-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <div>
            <h3 style={{ marginLeft: "0px" }}>
              User name <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloremque,
            </p>
            <div className="comment-action">
              <img src={like} alt="like-icon" />
              <span>244</span>
              <img src={dislike} alt="dislike-icon" />
              <span>Reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;

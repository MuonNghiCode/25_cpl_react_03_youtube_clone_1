import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = ({ sidebar }) => {
  return (
    <div className={`play-container ${sidebar ? "large-play-container" : ""}`}>
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;

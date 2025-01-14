import React, { useState, useEffect } from "react";
import "./Shorts.css";

import short1 from "../../assets/short1.mp4";
import short2 from "../../assets/short2.mp4";

const Shorts = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      { id: 2, src: short2, title: "Short Video 2", channelName: "Damitz2k" },
    ]);
  }, []);

  return (
    <div className="shortList">
      {videos.map((video) => (
        <div key={video.id} className="shorts-card">
          <video src={video.src} controls className="shorts-video" />
          <div className="shorts-info">
            <h3 className="shorts-title">{video.title}</h3>
            <p className="shorts-channel">{video.channelName}</p>
          </div>
          <div className="shorts-actions">
            <button className="shorts-like">
              👍
              <span>Like</span>
            </button>
            <button className="shorts-dislike">
              👎
              <span>Dislike</span>
            </button>
            <button className="shorts-share">
              🔗
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;

import React, { useState, useEffect, useRef } from "react";
import "./Shorts.css";

import short1 from "../../assets/short1.mp4";
import short2 from "../../assets/short2.mp4";
import short3 from "../../assets/short3.mp4";

const Shorts = ({ sidebar }) => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        src: short1,
        title: "Short Video 1",
        channelName: "Vie Channel",
      },
      {
        id: 2,
        src: short2,
        title: "Short Video 2",
        channelName: "Duong Domic",
      },
      {
        id: 3,
        src: short3,
        title: "Short Video 3",
        channelName: "Duong Domic",
      },
    ]);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const handleWheel = (e) => {
      if (e.deltaY > 0 && currentIndex < videos.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      videoRefs.current[currentIndex]?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [videos]);

  return (
    <div className="shortList">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="shorts-card"
          ref={(el) => (videoRefs.current[index] = el)}
        >
          <video src={video.src} controls muted loop className="shorts-video" />
          <div className="shorts-info">
            <h3 className="shorts-title">{video.title}</h3>
            <p className="shorts-channel">{video.channelName}</p>
          </div>
          <div className="shorts-actions">
            <button className="shorts-like">
              👍<span>Like</span>
            </button>
            <button className="shorts-dislike">
              👎<span>Dislike</span>
            </button>
            <button className="shorts-share">
              🔗<span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;

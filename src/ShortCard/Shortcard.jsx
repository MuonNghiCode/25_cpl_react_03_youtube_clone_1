import { useState } from "react";
import { useEffect } from "react";
import short1 from "../assets/short1.mp4";
const Shortcard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
    ]);
  }, []);
  return (
    <div>
      {videos.map((video) => (
        <div className="shorts-card">
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

export default Shortcard;

import React from "react";
import Shortcard from "../ShortCard/Shortcard";
import { useState } from "react";
import { useEffect } from "react";
import short1 from "../assets/short1.mp4";

const ShortsLayout = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      {
        id: 2,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      {
        id: 3,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      {
        id: 4,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      {
        id: 5,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
      {
        id: 6,
        src: short1,
        title: "Short Video 1",
        channelName: "MartiniAsphalt",
      },
    ]);
  }, []);
  return (
    <div className="flex mt-10 mb-10 rounded-2xl overflow-hidden items-center  w-full h-full bg-white text-white">
      <div className="w-full h-[500px] p-2 flex space-x-3 text-center bg-white border-b">
        {videos.map((video) => (
          <Shortcard
            key={video.id}
            src={video.src}
            title={video.title}
            channelName={video.channelName}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortsLayout;

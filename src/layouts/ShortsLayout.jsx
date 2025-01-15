import React from "react";
import Shortcard from "../ShortCard/Shortcard";
import { useState } from "react";
import { useEffect } from "react";
import short1 from "../assets/short1.mp4";
import short2 from "../assets/short2.mp4";
import short3 from "../assets/short3.mp4";

const ShortsLayout = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        src: short1,
        title: "Short Video ",
        channelName: "Vie Channel",
      },
      {
        id: 2,
        src: short2,
        title: "Short Video",
        channelName: "Duong Domic",
      },
      {
        id: 3,
        src: short3,
        title: "Short Video ",
        channelName: "Duong Domic",
      },
      {
        id: 4,
        src: short1,
        title: "Short Video",
        channelName: "Vie Channel",
      },
      {
        id: 5,
        src: short2,
        title: "Short Video",
        channelName: "Duong Domic",
      },
      {
        id: 6,
        src: short3,
        title: "Short Video ",
        channelName: "Duong Domic",
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

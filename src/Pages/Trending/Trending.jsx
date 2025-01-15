import React, { useState, useEffect } from "react";
import "./Trending.css";

function Trending({ sidebar }) {
  const [selectedCategory, setSelectedCategory] = useState("Now");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title:
        "TRỰC TIẾP: THÁI LAN - VIỆT NAM | CHUNG KẾT LƯỢT VỀ ASEAN MITSUBISHI ELECTRIC CUP™ 2024",
      channel: "FPT Bóng Đá Việt",
      views: 33000000,
      time: "Phát trực tiếp 9 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/RzMf2iWdy-c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLB7s4L3g0LCwMny5B8zcj-d9Cm2iA",
    },
    {
      title: "Khi Cầu Kính Squid Game Có Thật | Sheep #shorts",
      channel: "Sheep",
      views: 1400000,
      time: "2 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/_axaJy4b1ww/hq2.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4AbYIgAKAD4oCDAgAEAEYciBgKD4wDw==&amp;rs=AOn4CLBVjPLm3NjZ4iIlG44genELLadbrg",
    },
    {
      title: "Hoàng Hôn | Mỗi Khi Nhà Tôi Có Khách Đến Chúc Tết Kiểu #Shorts",
      channel: "Hoàng Hôn Official",
      views: 2200000,
      time: "3 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/wQgUOKJe3Pk/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4AbYIgAKAD4oCDAgAEAEYciBMKEYwDw==&amp;rs=AOn4CLC9OP8rG-nx3_xDgAhIRjnusPcCCA",
    },
    {
      title:
        "Highlights: Thái Lan - Việt Nam | Tuyệt đỉnh thăng hoa, Việt Nam mang cúp trở về",
      channel: "BÓNG ĐÁ VIỆT NAM",
      views: 10000000,
      time: "9 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/ooseD8-Z29I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLCowrXCXFt8vlOqghryqcwig6lwow",
    },
    {
      title: "Mùa Hè Năm Đó - The Underdogs | Official MV",
      channel: "EvB Records",
      views: 23200000,
      time: "3 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/jpPa1-EOxcc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLCBnFUbGkx-8v4Wk14zpo2i9tODnA",
    },
    {
      title:
        "The Red Light Green Light Game Returns | Squid Game: Season 2 | Netflix",
      channel: "Elon Musk_AI Robots",
      views: 8800000,
      time: "6 ngày trước",
      thumbnail:
        "https://i.ytimg.com/vi/urX78xQLWhk/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4Ac4FgAKACooCDAgAEAEYSCBWKGUwDw==&amp;rs=AOn4CLB6EbMgmy_TmxqMwgDm-yH5tPeJFA",
    },
    {
      title: "Superman | Official Teaser Trailer",
      channel: "DC",
      views: 52000000,
      time: "3 tuần trước",
      thumbnail:
        "https://i.ytimg.com/vi/uhUht6vAsMY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLApOfs2Wfj_Ml1RIES1s8Z2QA3bhw",
    },
  ];

  const filteredVideos = videos.filter((video) => {
    switch (selectedCategory) {
      case "Now":
        return true; // Hiển thị tất cả video
      case "Gaming": {
        const gamingKeywords = ["game", "play", "stream"];
        return gamingKeywords.some((keyword) =>
          video.title.toLowerCase().includes(keyword)
        );
      }
      case "Music": {
        const musicKeywords = ["music", "mv", "liveshow", "official"];
        return musicKeywords.some((keyword) =>
          video.title.toLowerCase().includes(keyword)
        );
      }
      case "Films": {
        const filmKeywords = ["film", "trailer", "netflix"];
        return filmKeywords.some((keyword) =>
          video.title.toLowerCase().includes(keyword)
        );
      }
      default:
        return true;
    }
  });

  filteredVideos.sort((a, b) => b.views - a.views); // Sắp xếp theo lượt xem giảm dần

  return (
    <div className={`container ${sidebar ? "large-container" : ""}`}>
      <div className="trending">
        <header className="header">
          <div className="title">
            <img
              src="https://www.youtube.com/img/trending/avatar/trending_animated.webp"
              style={{ width: "72px", height: "72px", marginRight: "10px" }}
              alt="Trending Icon"
              className="icon"
            />
            <h1>Trending</h1>
          </div>
          <div className="tab-container">
            <div className="tabs">
              <button
                className={`tab ${selectedCategory === "Now" ? "active" : ""}`}
                onClick={() => setSelectedCategory("Now")}
              >
                Now
              </button>
              <button
                className={`tab ${
                  selectedCategory === "Music" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Music")}
              >
                Music
              </button>
              <button
                className={`tab ${
                  selectedCategory === "Gaming" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Gaming")}
              >
                Gaming
              </button>
              <button
                className={`tab ${
                  selectedCategory === "Films" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Films")}
              >
                Films
              </button>
            </div>
          </div>
          <hr></hr>
        </header>
        {filteredVideos.map((video) => (
          <div key={video.id} className="video">
            <img src={video.thumbnail} alt="Video Thumbnail" />
            <div className="video-info">
              <h2>{video.title}</h2>
              <p>{video.channel}</p>
              <p>
                {video.views.toLocaleString()} lượt xem • {video.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;

import React from 'react';
import './Films.css';
import trending from '../../../assets/fire.png';

const Films = () => {
  return (
    <div className="container">
      <div className="trending-header">
        <div className="trending-title">
          <img src={trending} alt="trending" className="trending-icon" />
          <h2>Films</h2>
        </div>
      </div>

      <div className="trending-videos">
        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/XU4oplOtoQo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA-R2X7RQhuwDPPTwqaoNldzlMAJg" 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">4:19:11</span>
          </div>
          <div className="video-info">
            <h3 className="title">CHỊ DÂU - MAIN TRAILER | Khởi chiếu: 20.12.2024 </h3>
            <p className="channel">CGV Cinemas Vietnam <span className="verified-badge">✓</span></p>
            <p className="views">236k views • 1 months ago</p>
            <p className="description">Tên phim: CHỊ DÂU Thể loại: Tình cảm, tâm lý Đạo diễn: Trấn Thành Diễn viên: Phương Anh Đào, Tuấn Trần, Trấn ...</p>
          </div>
        </div>

        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/HXWRTGbhb4U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAif0BBKk8ViZCLGwFIIinmsxR08Q" 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">2:45:30</span>
          </div>
          <div className="video-info">
            <h3 className="title">MAI | MAIN TRAILER | MỘT BỘ PHIM CỦA TRẤN THÀNH - KHỞI CHIẾU: MÙNG 1 TẾT 2024 by CGV Cinemas Vietnam</h3>
            <p className="channel">CGV Cinemas Vietnam <span className="verified-badge">✓</span></p>
            <p className="views">355K views • 1 year ago</p>
            <p className="description">Thông tin chung: Tên phim: MAI  Thể loại: Tình cảm, tâm lý Đạo diễn: Trấn Thành Diễn viên: Phương Anh Đào, Tuấn Trần, Trấn ...</p>
          </div>
        </div>

        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/G5VLg5xnAUk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqs8S0vvUg-DpV-rlEqrVcYW3kJA" 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">1:55:20</span>
          </div>
          <div className="video-info">
            <h3 className="title">Avatar 3: Fire and Ash (2025) - First Trailer | James Cameron</h3>
            <p className="channel">KH Studio <span className="verified-badge">✓</span></p>
            <p className="views">2.6M views • 8 days ago</p>
            <p className="description"> #avatar3 #jamescameron Pandora's saga of fire and ash ignites the big screen. Editing, VFX, SFX, Thumbnail by ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films; 
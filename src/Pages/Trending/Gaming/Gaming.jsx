import React from 'react';
import './Gaming.css';
import trending from '../../../assets/fire.png';

const Gaming = () => {
  return (
    <div className="container">
      <div className="trending-header">
        <div className="trending-title">
          <img src={trending} alt="trending" className="trending-icon" />
          <h2>Gaming</h2>
        </div>
      </div>

      <div className="trending-videos">
        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/qiRRl3Q4ypo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqT_E_2aJOuMEZjrZtFu4uM1eZcQ" 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">30:24
            </span>
          </div>
          <div className="video-info">
            <h3 className="title">HIGHLIGHT | GEN vs T1 | CKTG 2024 - Bán Kết 2 | 27.10.2024</h3>
            <p className="channel">Vietnam Championship Series - VODs and Highlights </p>
            <p className="views">285k views • 2 months ago</p>
            <p className="description">► Đăng ký kênh để cập nhật các thông tin về VCS một cách mới nhất: Youtube VCS: https://www.youtube.com/@lolesports_vn ... </p>
          </div>
        </div>

        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/_f-tz2JurGk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3BjuBh7tdsmh4m8fiDtd6FzKapg" 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">10:34</span>
          </div>
          <div className="video-info">
            <h3 className="title">K3SOJU LỐI CHƠI MUNDO CẦM 2 ĐỒ HÓA CHỦ SIÊU BẤT TRỊ COMEBACK MẠNH MẼ 7 MÁU | ĐTCL MÙA 13</h3>
            <p className="channel">Cafe nhân phẩm <span className="verified-badge">✓</span></p>
            <p className="views">41k views • 1 months ago</p>
            <p className="description"> #teamfighttactics K3SOJU LỐI CHƠI MUNDO CẦM 2 ĐỒ SIÊU BẤT TRỊ COMEBACK MẠNH MẼ 7 MÁU | ĐTCL ...</p>
          </div>
        </div>

        <div className="video-card">
          <div className="thumbnail">
            <img 
              src="https://i.ytimg.com/vi/tF8nTlXTsRQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBoexwCh3RjFMG9A1O7cJDNdyNjfw  " 
              alt="video thumbnail" 
              className="thumbnail-img"
            />
            <span className="duration">5:49:19</span>
          </div>
          <div className="video-info">
            <h3 className="title">BLG vs T1 (BO5) | CKTG 2024 - Chung Kết | 02.11.2024</h3>
            <p className="channel">LoL Esports  VN<span className="verified-badge">✓</span></p>
            <p className="views">5.6M views • Streaming 2 months ago</p>
            <p className="description">Cùng theo dõi các trận của CKTG  2024 hôm nay nhé! ▻ Đăng ký kênh để cập nhật các thông tin về VCS một cách mới nhất: ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming; 
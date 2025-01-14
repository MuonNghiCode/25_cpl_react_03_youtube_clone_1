import React, { useState } from 'react';
import './Trending.css';
import trending from '../assets/fire.png';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('gaming');

  const renderContent = () => {
    if (activeTab === 'gaming' || activeTab === 'films' ) {
      return (
        <div className="trending-videos">
          <div className="video-card">
            <div className="thumbnail">
              <div className="thumbnail-placeholder"></div>
              <span className="duration">4:19:11</span>
            </div>
            <div className="video-info">
              <h3 className="title">🔴 TRỰC TIẾP: THÁI LAN - VIỆT NAM | CHUNG KẾT LƯỢT VỀ ASEAN MITSUBISHI ELECTRIC CUP™ 2024</h3>
              <p className="channel">FPT Bóng Đá Việt <span className="verified-badge">✓</span></p>
              <p className="views">33M views • Streamed 9 days ago</p>
              <p className="description">Quý khán giả đừng quên SUBSCRIBE: https://bit.ly/FPTBongDaViet 🔴TRỰC TIẾP: THÁI LAN - VIỆT NAM | CHUNG KẾT LƯỢT VỀ ASEAN MITSUBISHI ELECTRIC CUP™ 2024 Liên hệ...</p>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
              <div className="thumbnail-placeholder"></div>
              <span className="duration">1:10</span>
            </div>
            <div className="video-info">
              <h3 className="title">Khi Cậu Kính Squid Game Có Thật | Sheep #shorts</h3>
              <p className="channel">Sheep <span className="verified-badge">✓</span></p>
              <p className="views">1.4M views • 2 days ago</p>
              <p className="description">► Đăng ký kênh Sheep: https://www.youtube.com/c/Sheep95 ► Đăng ký kênh Sheep Shorts: https://metub.net/sheepshorts ► Đăng ký kênh Sheep Farm: https://metub.net/sheepfarm ►...</p>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
              <div className="thumbnail-placeholder"></div>
              <span className="duration">1:06</span>
            </div>
            <div className="video-info">
              <h3 className="title">Hoàng Hôn | Mới Khi Nhà Tôi Có Khách Đến Chúc Tết Kiểu #Shorts</h3>
              <p className="channel">Hoàng Hôn Official</p>
              <p className="views">2.2M views • 3 days ago</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eligendi aliquid voluptate aperiam id voluptates fuga minus sed adipisci.</p>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
              <div className="thumbnail-placeholder"></div>
              <span className="duration">1:10</span>
            </div>
            <div className="video-info">
              <h3 className="title">Khi Squid Game 1988 Có Thật | Sheep #shorts</h3>
              <p className="channel">Sheep</p>
              <p className="views">1.2M views • 2 days ago</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime reiciendis sapiente quisquam?</p>
            </div>
          </div>

          <div className="video-card">
            <div className="thumbnail">
              <div className="thumbnail-placeholder"></div>
              <span className="duration">13:27</span>
            </div>
            <div className="video-info">
              <h3 className="title">Highlights: Thái Lan - Việt Nam | Tuyệt đỉnh thăng hoa, Việt Nam mang cúp trở về</h3>
              <p className="channel">BÓNG ĐÁ VIỆT NAM</p>
              <p className="views">10M views • 9 days ago</p>
              <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quia fugiat sapiente debitis iusto natus ab nesciunt animi.</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div className="trending-header">
        <div className="trending-title">
          <img src={trending} alt="trending" className="trending-icon" />
          <h2>Trending</h2>
        </div>
      </div>

      <div className="tab-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'now' ? 'active' : ''}`}
            onClick={() => setActiveTab('now')}
          >
            Now
          </button>
          <button 
            className={`tab ${activeTab === 'music' ? 'active' : ''}`}
            onClick={() => setActiveTab('music')}
          >
            Music
          </button>
          <button 
            className={`tab ${activeTab === 'gaming' ? 'active' : ''}`}
            onClick={() => setActiveTab('gaming')}
          >
            Gaming
          </button>
          <button 
            className={`tab ${activeTab === 'films' ? 'active' : ''}`}
            onClick={() => setActiveTab('films')}
          >
            Films
          </button>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default Trending; 
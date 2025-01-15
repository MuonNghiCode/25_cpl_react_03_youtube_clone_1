import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Gaming from './Gaming/Gaming';
import Films from './Films/Films';
import trending from '../../assets/fire.png';
import './Trending.css';

const Trending = () => {
  const location = useLocation();

  return (
    <div className="trending-container">
      <div className="trending-header">
        <div className="trending-title">
          <img src={trending} alt="trending" className="trending-icon" />
          <h2>Trending</h2>
        </div>
      </div>

      <div className="trending-tabs">
        <NavLink to="/trending" end className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Now
        </NavLink>
        <NavLink to="/trending/music" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Music
        </NavLink>
        <NavLink to="/trending/gaming" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Gaming
        </NavLink>
        <NavLink to="/trending/films" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>
          Movies
        </NavLink>
      </div>

      <div className="trending-content">
        <Routes>
          <Route path="/" element={<div className="placeholder">Now trending content will be implemented by others</div>} />
          <Route path="/music" element={<div className="placeholder">Music trending content will be implemented by others</div>} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/films" element={<Films />} />
        </Routes>
      </div>
    </div>
  );
};

export default Trending; 
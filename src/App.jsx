import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Trending from "./Pages/Trending";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:categoriesId/:videoId" element={<Video />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

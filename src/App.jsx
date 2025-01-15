import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import MainLayout from "./layouts/MainLayout";
import Music from "./Pages/YTBMusic/Music";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/video/:categoriesId/:videoId"
        element={
          <MainLayout>
            <Video />
          </MainLayout>
        }
      />
      <Route
<<<<<<< HEAD
        path="/feed/video/:categoriesId/:videoId"
        element={
          <MainLayout>
            <Video />
          </MainLayout>
        }
      />
      <Route
        path="/feed"
        element={
          <MainLayout>
            <Home />
=======
        path="/music"
        element={
          <MainLayout>
            <Music />
>>>>>>> fc708f677f9ba56c6580f411dd21b90b4550e43b
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;

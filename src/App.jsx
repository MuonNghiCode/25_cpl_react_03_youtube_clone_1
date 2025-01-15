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
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;

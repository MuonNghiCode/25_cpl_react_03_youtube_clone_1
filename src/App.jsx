import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import MainLayout from "./layouts/MainLayout";
import Short from "./Pages/Shorts/Short";
import Music from "./Pages/YTBMusic/Music";
import Trending from "./Pages/Trending/Trending";

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
        path="/shorts"
        element={
          <MainLayout>
            <Short />
          </MainLayout>
        }
      ></Route>
      <Route
        path="/music"
        element={
          <MainLayout>
            <Music />
          </MainLayout>
        }
      ></Route>
      <Route
        path="/trending"
        element={
          <MainLayout>
            <Trending />
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

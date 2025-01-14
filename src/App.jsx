import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import MainLayout from "./layouts/MainLayout";
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
        path="/trending"
        element={
          <MainLayout>
            <Trending />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;

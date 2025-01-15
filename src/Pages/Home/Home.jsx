import React from "react";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import ShortsLayout from "../../layouts/ShortsLayout";
const Home = ({ sidebar }) => {
  return (
    <>
      <div className={`container ${sidebar ? "large-container" : ""}`}>
        <Feed />
      </div>
      <ShortsLayout />
    </>
  );
};

export default Home;

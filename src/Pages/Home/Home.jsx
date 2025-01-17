// import React from "react";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";
import CategoriesList from "./CategoriesList";
import ShortsLayout from "../../layouts/ShortsLayout";
const Home = ({ sidebar }) => {
  return (
    <>
      <div className={`container ${sidebar ? "large-container" : ""}`}>
        <CategoriesList />
      </div>
      <div className={`container ${sidebar ? "large-container" : ""}`}>
        <Feed />
      </div>
      <div className="ml-[220px]">
        <ShortsLayout />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./Music.css";
import MucicItem from "../../Components/YTBMusic/musicComponents";
const YTBMusic = ({ sidebar }) => {
  return (
    <>
      <div className={`container ${sidebar ? "large-container" : ""}`}>
      <MucicItem/>
      </div>
    </>
  );t
};

export default YTBMusic;
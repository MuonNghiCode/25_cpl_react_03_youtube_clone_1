  import React, { useState } from "react";
  import "./categoriesBar.scss";

  const favortitle = [
    "All",
    "Gaming",
    "Music",
    "Coding",
    "React Native",
    "Angular js",
    "Ted ed",
    "News",
    "Camping",
    "Lo-fi",
    "Comedy",
    "Rapping",
    "Solo",
    "Soft-skill",
    "Guitar",
    "Role-Playing Games",
    "Music"
  ];

  const CategoriesList = () => {
    const [activeElement, setActiveElement] = useState("All");

    const handleClick = (value) => {
      setActiveElement(value);
    };

    return (
      <div className="CategoriesBar">
        {favortitle.map((value, i) => (
          <span
            onClick={() => handleClick(value)}
            key={i}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        ))}
      </div>
    );
  };
  export default CategoriesList;

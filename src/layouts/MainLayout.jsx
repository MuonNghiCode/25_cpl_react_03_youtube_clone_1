import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ShortsLayout from "./ShortsLayout";

const MainLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <div>
        <aside>
          <Sidebar sidebar={sidebar} />
        </aside>
        <main>{React.cloneElement(children, { sidebar })}</main>
      </div>
    </div>
  );
};

export default MainLayout;

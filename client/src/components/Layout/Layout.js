import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

import HomePage from "../../pages/HomePage/HomePage";
import "./layout.css";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div
            className={
              toggle
                ? "sidebar-toggle-icons align-left"
                : "sidebar-toggle-icons"
            }
          >
            <p onClick={handletoggle}>
              <RiMenu4Line size={30} />
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default Layout;

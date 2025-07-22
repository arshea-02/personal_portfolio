import React from "react";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { BsClipboard2Fill } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-scroll";

import "./mobileNav.css";

const MobileNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropDown = () => {
    setDropdown(!dropdown);
  };

  const handleMenuClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <RiMenu4Line color="white" size={30} onClick={handleDropDown} />
        </div>
        {dropdown && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <GoHomeFill color="white" size="25px" />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="edu"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <RiGraduationCapFill color="white" size="25px" />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="skill"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <BsFillLaptopFill color="white" size="25px" />
                    Skills Set
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <BsFillLightbulbFill color="white" size="25px" />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="exp"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <BsClipboard2Fill color="white" size="25px" />
                    Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="certification"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <FaCertificate color="white" size="25px" />
                    Certifications
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    offset={-100}
                    duration={500}
                    smooth={true}
                    onClick={handleMenuClick}
                  >
                    <BsFillTelephoneFill color="white" size="25px" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { use, useEffect, useMemo, useState } from "react";

const Navbar = () => {
const [DarkMode, setDarkMode] = useState(false); 

  // MODECHANGE
  useEffect(() => {
    document.body.style.backgroundColor = DarkMode ? "#323131e1" : "white";
    document.body.style.color = DarkMode ? "rgba(0, 0, 0, 1)" : "Black";
  }, [DarkMode]);

  const Modechange = () => {
    setDarkMode((prev) => !prev); 
  };


  return (
    <nav className="nav-bar">
      <ul>
        <li className="logo">New Arsha</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>Portfolio</li>
        <li><Link to="/Team">Team</Link></li>
        <li><Link to="/Pricing">Pricing</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li className="nav-item dropdown">
          Dropdown
          <ol className="Homedrop-menu">
            <li className="dm">Dropdown 1</li>
            <li className="dm">Dropdown 2</li>
            <li className="sub-drop dm">
              Deep Dropdown
              <ul className="sub-menu">
                <li className="sub-list">Deep Dropdown 1</li>
                <li className="sub-list">Deep Dropdown 2</li>
                <li className="sub-list">Deep Dropdown 3</li>
                <li className="sub-list">Deep Dropdown 4</li>
                <li className="sub-list">Deep Dropdown 5</li>
              </ul>
            </li>
            <li className="dm">Dropdown 3</li>
            <li className="dm">Dropdown 4</li>
          </ol>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <button className="home-btn">Get Started</button>
        </li>
        <li>
          <button className="Theme-btn text-center " onClick={Modechange} >
            {DarkMode ? (
          <box-icon name="sun" type="solid" color="#fefa00ff"></box-icon>
        ) : (
          <box-icon name="moon" type="solid" color="#323131ff"></box-icon>
        )}
          </button>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;

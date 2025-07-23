import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Navbar = () => {
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
      </ul>
      
    </nav>
  );
};

export default Navbar;

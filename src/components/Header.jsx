import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-container">
        <div className="menu">
          <BiMenu className="menu-icon" />
        </div>

        <div className="logo">
          <h1>Etravel</h1>
        </div>

        <div className="right">
          <ul>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

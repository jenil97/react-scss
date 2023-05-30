import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../styles/Header.scss";
import { Menu } from "../Data";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="header">
      <nav className="nav-container">
        <div className="menu">
          <BiMenu className="menu-icon" onClick={showMenu} />
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

      <nav className={openMenu ? 'slider active' : 'slider'}>
        <ul onClick={showMenu} className="ul-items">
          {Menu.map((item, index) => {
            return (
              <div key={index} className="container">
                <li className={item.className}>
                  <Link to={item.path}>
                    {item.text}
                  </Link>
                </li>
              </div>
            )
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

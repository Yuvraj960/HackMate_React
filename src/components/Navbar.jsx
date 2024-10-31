/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__logo">
        <h1>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" />
          </NavLink>
        </h1>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/resources`}>Resources</NavLink>
          </li>
          <li>
            <NavLink to={`/Events`}>Events</NavLink>
          </li>
          <li>
            <NavLink to={`/Signup`}>Signup</NavLink>
          </li>
          <li>
            <NavLink to={`/Login`}>Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

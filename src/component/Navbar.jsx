import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-2">
      <NavLink className="navbar-brand" to="/">
        SpeedTest
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/results">
              Result
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/challenges">
              Document
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar-2 sticky-top navbar-expand-lg ">
      <span className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ">
            <NavLink to="/search" className="nav-item-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
            <NavLink to="/notification" className="nav-item-2">
              <i className="fa-solid fa-bell"></i>
            </NavLink>
            <NavLink to="/settings" className="nav-item-2">
              <i className="fa-solid fa-gear"></i>
            </NavLink>
            <NavLink to="/profile" className="nav-item-2">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Navbar;

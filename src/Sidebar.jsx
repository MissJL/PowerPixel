import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/sidebar.css";

function Sidebar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-list">
            <NavLink to="/" className="nav-link">
              <h6 className="nav-text mt-4">MAIN</h6>{" "}
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
              <i className="fa-solid fa-gauge-high"></i>
              <span className="nav-link-name">Dashboard</span>
            </NavLink>
            <NavLink to="/orders" className="nav-link">
              <i className="fa-solid fa-envelope-open"></i>
              <span className="nav-link-name">Orders</span>
            </NavLink>
            <NavLink to="/analytics" className="nav-link">
              <i className="fa-solid fa-chart-line"></i>
              <span className="nav-link-name">Analytics</span>
            </NavLink>
            <NavLink to="/categories" className="nav-link">
              <i className="fa-solid fa-rectangle-list"></i>
              <span className="nav-link-name">Categories</span>
            </NavLink>
            <NavLink to="/collections" className="nav-link">
              <i className="fa-solid fa-tags"></i>
              <span className="nav-link-name">Collections</span>
            </NavLink>
            <NavLink to="/products" className="nav-link">
              <i className="fa-solid fa-tag"></i>
              <span className="nav-link-name">Products</span>
            </NavLink>
            <NavLink to="/discount" className="nav-link">
              <i className="fa-solid fa-clover"></i>
              <span className="nav-link-name">Discount</span>
            </NavLink>
            <NavLink to="/employees" className="nav-link">
              <i className="fa-solid fa-briefcase"></i>
              <span className="nav-link-name">Employees</span>
            </NavLink>
            <NavLink to="/customers" className="nav-link">
              <i className="fa-solid fa-users"></i>
              <span className="nav-link-name">Customers</span>
            </NavLink>
            <h6 className="nav-text">SALES CHANNELS</h6>
            <NavLink to="/onlinestore" className="nav-link">
              <i className="fa-solid fa-store"></i>
              <span className="nav-link-name">Online Store</span>
            </NavLink>
            <NavLink to="/marketing" className="nav-link">
              <i className="fa-solid fa-business-time"></i>
              <span className="nav-link-name">Marketing</span>
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

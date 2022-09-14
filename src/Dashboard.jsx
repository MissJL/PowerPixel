import React from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "./DatePicker";
import Customers from "./Customers";
import Orders from "./Orders";
import Earnings from "./Earnings";
import Growth from "./Growth";
import Revenue from "./Revenue";
import TotalSales from "./TotalSales";
import TopSellingProducts from "./TopSellingProducts";
import "./Style/dashboard.css";

function Dashboard() {
  const links = [
    { page: Customers(), link: "/customers", className: "Customers" },
    { page: Orders(), link: "/orders", className: "Orders" },
    { page: Earnings(), link: "/earnings", className: "Earnings" },
    { page: Growth(), link: "/growth", className: "Growth" },
    { page: Revenue(), link: "/revenue", className: "Revenue" },
    {
      page: TopSellingProducts(),
      link: "/products",
      className: "TopSellingProducts",
    },
    { page: TotalSales(), link: "/sale", className: "TotalSales" },
  ];

  return (
    <div className="nested-dashboard">
      <span className="h1">Dashboard</span>
      <span className="DatePicker">
        <DatePicker />
      </span>
      {links.map((link) => (
        <span className={link.className}>
          <NavLink
            key={link.page}
            style={{ textDecoration: "none" }}
            to={link.link}
          >
            {link.page}
          </NavLink>
        </span>
      ))}
    </div>
  );
}

export default Dashboard;

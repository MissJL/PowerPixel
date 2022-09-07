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
      <h1>Dashboard</h1>
      <div className="DatePicker">
        <DatePicker />
      </div>
      {links.map((link) => (
        <div className={link.className}>
          <NavLink
            key={link.page}
            style={{ textDecoration: "none" }}
            to={link.link}
          >
            {link.page}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

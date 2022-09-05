import React from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "./DatePicker";
import Customers from "./Customers";
import Orders from "./Orders";
import Earnings from "./Earnings";
import Growth from "./Growth";
import Revenue from "./Revenue";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";

function Dashboard() {
  return (
    <div className="nested-dashboard">
      <h1>Dashboard</h1>
      <div className="DatePicker">
        <DatePicker />
      </div>
      <div className="Customers">
        <NavLink style={{ textDecoration: "none" }} to="/customers">
          <Customers />
        </NavLink>
      </div>
      <div className="Orders">
        <NavLink style={{ textDecoration: "none" }} to="/orders">
          <Orders />
        </NavLink>
      </div>
      <div className="Earnings">
        <NavLink style={{ textDecoration: "none" }} to="/earnings">
          <Earnings />
        </NavLink>
      </div>
      <div className="Growth">
        <NavLink style={{ textDecoration: "none" }} to="/growth">
          <Growth />
        </NavLink>
      </div>
      <div className="Revenue">
        <NavLink style={{ textDecoration: "none" }} to="/revenue">
          <Revenue />
        </NavLink>
      </div>
      <div className="TopSellingProducts">
        <NavLink style={{ textDecoration: "none" }} to="/products">
          <TopSellingProducts />
        </NavLink>
      </div>
      <div className="TotalSales">
        <NavLink style={{ textDecoration: "none" }} to="/sales">
          <TotalSales />
        </NavLink>
      </div>
    </div>
  );
}

export default Dashboard;

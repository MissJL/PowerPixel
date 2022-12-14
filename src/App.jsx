import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Analytics from "./Analytics";
import Categories from "./Categories";
import Collections from "./Collections";
import Customers from "./Customers";
import Discount from "./Discount";
import Employees from "./Employees";
import OnlineStore from "./OnlineStore";
import Products from "./Products";
import TotalSales from "./TotalSales";
import Revenue from "./Revenue";
import Growth from "./Growth";
import Marketing from "./Marketing";
import Profile from "./Profile";
import Settings from "./Settings";
import Notifications from "./Notifications";
import "./Style/style.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="grid-item grid-item-1">
          <Navbar />
        </div>
        <main>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/orders" component={Orders} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/categories" component={Categories} />
            <Route path="/collections" component={Collections} />
            <Route path="/products" component={Products} />
            <Route path="/revenue" component={Revenue} />
            <Route path="/growth" component={Growth} />
            <Route path="/sales" component={TotalSales} />
            <Route path="/discount" component={Discount} />
            <Route path="/employees" component={Employees} />
            <Route path="/customers" component={Customers} />
            <Route path="/onlinestore" component={OnlineStore} />
            <Route path="/marketing" component={Marketing} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/notifications" component={Notifications} />
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Chart } from "./DoughnutChart";

function TotalSales(props) {
  return (
    <span className="card-body">
      <h1 className="card-title">Total Sales</h1>
      {/* <Chart /> */}
      <i className="fa-solid fa-arrow-up"></i>
    </span>
  );
}

export default TotalSales;

import React from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    productName: "Pocket Drone 2.4G",
    date: "07 September 2022",
    price: "$129.99",
    quantity: "32",
    amount: 32 * 129.99,
  },
  {
    id: 2,
    productName: "Marco Lightweight Shirt",
    date: "10 July 2022",
    price: "$55.99",
    quantity: "47",
    amount: 47 * 55.99,
  },
  {
    id: 3,
    productName: "Lightweight Jacket",
    date: "22 August 2022",
    price: "$73.99",
    quantity: "53",
    amount: 53 * 73.99,
  },
];

const columns = [
  { path: "Product Name", order: "asc" },
  { path: "Date Time", order: "asc" },
  { path: "Price", order: "asc" },
  { path: "Quantity", order: "asc" },
  { path: "Amount", order: "asc" },
];

function TopSellingProducts() {
  //   const [sortColumn, setSortColumns] = useState({ columns });

  //   const raiseSort = (path) => {
  //     const sortColumn = { ...columns };
  //     if (sortColumn.path === path) {
  //       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //     } else {
  //       sortColumn.path = path;
  //       sortColumn.order = "asc";
  //     }
  //     return setSortColumns;

  //     function RenderSortIcon(column) {
  //       if (sortColumn.path !== column.path) return null;
  //       if (sortColumn.order === "asc")
  //         return <i className="fa-solid fa-sort-down"></i>;
  //       return <i className="fa-solid fa-sort-up"></i>;
  //     }
  //   };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="title-topSellingProducts">Top Selling Products</h2>
        <table className="table">
          <thead className="table-head-topSellingProducts">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.path}
                  style={{ cursor: "pointer" }}
                  //   onClick={() => raiseSort(column.path)}
                >
                  {column.path}
                  {/* {RenderSortIcon(column)} */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.date}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;

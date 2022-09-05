import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{amount}</h6>
        <a className="card-text">
          {icon}
          {percentage}
        </a>
      </div>
    </div>
  );
}

export default Card;

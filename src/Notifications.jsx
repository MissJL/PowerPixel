import React from "react";

function Notifications(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        New message(s)
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Old messages
        <span className="badge bg-primary rounded-pill">2</span>
      </li>
    </ul>
  );
}

export default Notifications;

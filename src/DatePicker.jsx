import React, { useState } from "react";
import "./Style/datepicker.css";

function Calendar() {
  const [date, setDate] = useState();
  const currentdate = new Date().toISOString().slice(0, 10);

  return (
    <div className="date-picker">
      <input
        className="input"
        type="date"
        id="currentdate"
        value={date ? date : currentdate}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Calendar;

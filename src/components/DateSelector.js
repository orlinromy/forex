import React from "react";

const DateSelector = (props) => {
  return (
    <div>
      <input
        type="date"
        onChange={(e) => {
          if (e.target.value <= new Date().toISOString().split("T")[0]) {
            props.setDate(e.target.value);
          } else {
            alert(
              "Please input date before " +
                new Date().toISOString().split("T")[0]
            );
            e.target.value = props.date;
          }
        }}
      ></input>
    </div>
  );
};

export default DateSelector;

import React, { useState } from "react";
import Header from "./components/Header";
import DateSelector from "./components/DateSelector";
import Forex from "./components/Forex";

function App() {
  const [date, setDate] = useState();

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
      >
        <p>
          Rates as of{" "}
          {date
            ? date
            : new Date().toLocaleDateString("en-GB").replace(/\//g, "-")}
        </p>
        <DateSelector date={date} setDate={setDate} />
      </div>
      <Forex date={date} />
    </div>
  );
}

export default App;

import React from "react";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import PieChart from "./PieChart";
import TreeChart from "./TreeChart";

function App() {
  return (
    <div className="App">
      <center>PIE</center>
      <div style={{ width: "100%", height: "60vh" }}>
        <PieChart />
      </div>
      <center>TREE MAP</center>
      <div style={{ width: "100%", height: "60vh" }}>
        <TreeChart />
      </div>
      <center>BUBBLE CLUSTER</center>
      <div style={{ width: "100%", height: "60vh" }}>
        <BubbleChart />
      </div>
      <center>BARS</center>
      <div style={{ width: "100%", height: "30vh" }}>
        <BarChart />
      </div>
    </div>
  );
}

export default App;

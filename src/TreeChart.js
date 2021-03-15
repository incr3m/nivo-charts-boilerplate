import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
import treeData from "./treeData.json";

export default function TreeChart() {
  return (
    <ResponsiveTreeMap
      data={treeData}
      identity="name"
      value="loc"
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
    />
  );
}

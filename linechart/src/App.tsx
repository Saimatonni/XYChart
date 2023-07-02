import React, { useState } from "react";
import "./App.css";
import { CustomLineChart } from "./CustomLineChart";

const lines = [
  {
    title: "Personalized",
    color: "#8B5CF6",
    data: [
      {
        name: "Sat 05/29",
        value: 0.33,
      },
      {
        name: "Sun 05/30",
        value: 0.34,
      },
      {
        name: "Mon 05/31",
        value: 0.38,
      },
      {
        name: "Tues 06/01",
        value: 0.4,
      },
      {
        name: "Wed 06/02",
        value: 0.36,
      },
      {
        name: "Thu 06/03",
        value: 0.35,
      },
      {
        name: "Fri 06/04",
        value: 0.32,
      },
      
    ],
  },
  {
    title: "Toplist",
    color: "#22C55E",
    data: [
      {
        name: "Sat 05/29",
        value: 0.25,
      },
      {
        name: "Sun 05/30",
        value: 0.26,
      },
      {
        name: "Mon 05/31",
        value: 0.22,
      },
      {
        name: "Tues 06/01",
        value: 0.23,
      },
      {
        name: "Wed 06/02",
        value: 0.27,
      },
      {
        name: "Thu 06/03",
        value: 0.26,
      },
      {
        name: "Fri 06/04",
        value: 0.21,
      },
    ],
  },
  {
    title: "Random",
    color: "#B2BEB5",
    data: [
      {
        name: "Sat 05/29",
        value: 0.15,
      },
      {
        name: "Sun 05/30",
        value: 0.16,
      },
      {
        name: "Mon 05/31",
        value: 0.17,
      },
      {
        name: "Tues 06/01",
        value: 0.16,
      },
      {
        name: "Wed 06/02",
        value: 0.15,
      },
      {
        name: "Thu 06/03",
        value: 0.14,
      },
      {
        name: "Fri 06/04",
        value: 0.16,
      },
    ],
  },
];

const xDomain = [
  "Sat 05/29",
  "Sun 05/30",
  "Mon 05/31",
  "Tues 06/01",
  "Wed 06/02",
  "Thu 06/03",
  "Fri 06/04",
];

interface DataPoint {
  name: string;
  value: number;
}



function App(){
  
  const tooltipOpen = false;
  const tooltipLeft = 0;
  const tooltipTop = 0;
  const tooltipData = undefined;
  const hideTooltip = () => {};
  const showTooltip = (event: React.MouseEvent<Element, MouseEvent>, data: DataPoint) => {};
  return (
    <div>
      <CustomLineChart
        lines={lines}
        width={800}
        height={300}
        margin={{
          top: 20,
          bottom: 20,
          left: 40,
          right: 95,
        }}
        // yRange={[0.0,0.2, 0.4, 0.6, 0.8]}
        xDomain={xDomain}
        // tooltipOpen={tooltipOpen}
        // tooltipLeft={tooltipLeft}
        // tooltipTop={tooltipTop}
        // tooltipData={tooltipData}
        // hideTooltip={hideTooltip}
        // showTooltip={showTooltip}
      />
    </div>
  );
}

export default App;

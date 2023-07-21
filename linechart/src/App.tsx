import React, { useState } from "react";
import "./App.css";
import { CustomLineChart } from "./CustomLineChart";


const lines = [
  {
    title: "Personalized",
    color: "#8B5CF6",
    data: [
      {
        name: "05/01 12:00AM",
        value: 0.33,
      },
      {
        name: "05/01 6:00AM",
        value: 0.39,
      },
      {
        name: "05/01 12:00PM",
        value: 0.36,
      },
      {
        name: "05/01 6:00PM",
        value: 0.30,
      },
      {
        name: "05/02 12:00AM",
        value: 0.33,
      },
      {
        name: "05/02 6:00AM",
        value: 0.39,
      },
      {
        name: "05/02 12:00PM",
        value: 0.36,
      },
      {
        name: "05/02 6:00PM",
        value: 0.34,
      },
      {
        name: "05/03 12:00AM",
        value: 0.32,
      },
      {
        name: "05/03 6:00AM",
        value: 0.34,
      },
      {
        name: "05/03 12:00PM",
        value: 0.38,
      },
      {
        name: "05/03 6:00PM",
        value: 0.32,
      },
      {
        name: "05/04 12:00AM",
        value: 0.35,
      },
      {
        name: "05/04 6:00AM",
        value: 0.37,
      },
      {
        name: "05/04 12:00PM",
        value: 0.35,
      },
      {
        name: "05/04 6:00PM",
        value: 0.4,
      },
      {
        name: "05/05 12:00AM",
        value: 0.42,
      },
      {
        name: "05/05 6:00AM",
        value: 0.39,
      },
      {
        name: "05/05 12:00PM",
        value: 0.41,
      },
      {
        name: "05/05 6:00PM",
        value: 0.38,
      },
      {
        name: "05/06 12:00AM",
        value: 0.36,
      },
      {
        name: "05/06 6:00AM",
        value: 0.37,
      },
      {
        name: "05/06 12:00PM",
        value: 0.34,
      },
      {
        name: "05/06 6:00PM",
        value: 0.36,
      },
      {
        name: "05/07 12:00AM",
        value: 0.32,
      },   
    ],
  },
  {
    title: "Toplist",
    color: "#22C55E",
    data: [
      {
        name: "05/01 12:00AM",
        value: 0.25,
      },
      {
        name: "05/01 6:00AM",
        value: 0.27,
      },
      {
        name: "05/01 12:00PM",
        value: 0.24,
      },
      {
        name: "05/01 6:00PM",
        value: 0.22,
      },
      {
        name: "05/02 12:00AM",
        value: 0.25,
      },
      {
        name: "05/02 6:00AM",
        value: 0.26,
      },
      {
        name: "05/02 12:00PM",
        value: 0.29,
      },
      {
        name: "05/02 6:00PM",
        value: 0.26,
      },
      {
        name: "05/03 12:00AM",
        value: 0.24,
      },
      {
        name: "05/03 6:00AM",
        value: 0.26,
      },
      {
        name: "05/03 12:00PM",
        value: 0.22,
      },
      {
        name: "05/03 6:00PM",
        value: 0.20,
      },
      {
        name: "05/04 12:00AM",
        value: 0.22,
      },
      {
        name: "05/04 6:00AM",
        value: 0.23,
      },
      {
        name: "05/04 12:00PM",
        value: 0.26,
      },
      {
        name: "05/04 6:00PM",
        value: 0.23,
      },
      {
        name: "05/05 12:00AM",
        value: 0.27,
      },
      {
        name: "05/05 6:00AM",
        value: 0.26,
      },
      {
        name: "05/05 12:00PM",
        value: 0.25,
      },
      {
        name: "05/05 6:00PM",
        value: 0.27,
      },
      {
        name: "05/06 12:00AM",
        value: 0.24,
      },
      {
        name: "05/06 6:00AM",
        value: 0.26,
      },
      {
        name: "05/06 12:00PM",
        value: 0.27,
      },
      {
        name: "05/06 6:00PM",
        value: 0.26,
      },
      {
        name: "05/07 12:00AM",
        value: 0.24,
      },   
    ],
  },
  {
    title: "Random",
    color: "#B2BEB5",
    data: [
      {
        name: "05/01 12:00AM",
        value: 0.15,
      },
      {
        name: "05/01 6:00AM",
        value: 0.17,
      },
      {
        name: "05/01 12:00PM",
        value: 0.14,
      },
      {
        name: "05/01 6:00PM",
        value: 0.15,
      },
      {
        name: "05/02 12:00AM",
        value: 0.13,
      },
      {
        name: "05/02 6:00AM",
        value: 0.16,
      },
      {
        name: "05/02 12:00PM",
        value: 0.18,
      },
      {
        name: "05/02 6:00PM",
        value: 0.16,
      },
      {
        name: "05/03 12:00AM",
        value: 0.17,
      },
      {
        name: "05/03 6:00AM",
        value: 0.13,
      },
      {
        name: "05/03 12:00PM",
        value: 0.17,
      },
      {
        name: "05/03 6:00PM",
        value: 0.16,
      },
      {
        name: "05/04 12:00AM",
        value: 0.14,
      },
      {
        name: "05/04 6:00AM",
        value: 0.15,
      },
      {
        name: "05/04 12:00PM",
        value: 0.17,
      },
      {
        name: "05/04 6:00PM",
        value: 0.16,
      },
      {
        name: "05/05 12:00AM",
        value: 0.13,
      },
      {
        name: "05/05 6:00AM",
        value: 0.16,
      },
      {
        name: "05/05 12:00PM",
        value: 0.15,
      },
      {
        name: "05/05 6:00PM",
        value: 0.13,
      },
      {
        name: "05/06 12:00AM",
        value: 0.16,
      },
      {
        name: "05/06 6:00AM",
        value: 0.14,
      },
      {
        name: "05/06 12:00PM",
        value: 0.16,
      },
      {
        name: "05/06 6:00PM",
        value: 0.17,
      },
      {
        name: "05/07 12:00AM",
        value: 0.12,
      },   
    ],
 },
];



const xDomain = [
  "Fri 05/01",
  "Sat 05/02",
  "Sun 05/03",
  "Mon 05/04",
  "Tues 05/05",
  "Wed 05/06",
  "Thu 05/07",
];





function App(){
  
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
      />
    </div>
  );
}

export default App;

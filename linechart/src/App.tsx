import React, { useState } from "react";
import "./App.css";
import { CustomLineChart } from "./CustomLineChart";

// const lines2 = [
//   {
//     title: "Personalized",
//     color: "#8B5CF6",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.33,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.34,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.38,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.4,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.36,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.35,
//       },
//       {
//         name: "Sun 05/30",
//         value: 0.32,
//       },
      
//     ],
//   },
//   {
//     title: "Toplist",
//     color: "#22C55E",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.25,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.26,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.22,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.23,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.27,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.26,
//       },
//       {
//         name: "Sun 05/30",
//         value: 0.21,
//       },
//     ],
//   },
//   {
//     title: "Random",
//     color: "#B2BEB5",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.15,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.16,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.17,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.16,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.15,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.14,
//       },
//       {
//         name: "Sun 05/30",
//         value: 0.16,
//       },
//     ],
//   },
// ];


// const lines3 = [
//   {
//     title: "Personalized",
//     color: "#8B5CF6",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.33,
//       },
//       {
//         name: "Sat 05/01",
//         value: 0.39,
//       },
//       {
//         name: "Sun 05/02",
//         value: 0.36,
//       },
//       {
//         name: "Mon 05/03",
//         value: 0.30,
//       },
//       {
//         name: "Tues 05/04",
//         value: 0.33,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.39,
//       },
//       {
//         name: "Thu 05/06",
//         value: 0.36,
//       },
//       {
//         name: "Fri 05/07",
//         value: 0.34,
//       },
//       {
//         name: "Sat 05/08",
//         value: 0.32,
//       },
//       {
//         name: "Sun 05/09",
//         value: 0.34,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.38,
//       },
//       {
//         name: "Tues 05/11",
//         value: 0.32,
//       },
//       {
//         name: "Wed 05/12",
//         value: 0.35,
//       },
//       {
//         name: "Thu 05/13",
//         value: 0.37,
//       },
//       {
//         name: "Fri 05/14",
//         value: 0.35,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.4,
//       },
//       {
//         name: "Sun 05/16",
//         value: 0.42,
//       },
//       {
//         name: "Mon 05/17",
//         value: 0.39,
//       },
//       {
//         name: "Tues 05/18",
//         value: 0.41,
//       },
//       {
//         name: "Wed 05/19",
//         value: 0.38,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.36,
//       },
//       {
//         name: "Fri 05/21",
//         value: 0.37,
//       },
//       {
//         name: "Sat 05/22",
//         value: 0.34,
//       },
//       {
//         name: "Sun 05/23",
//         value: 0.36,
//       },
//       {
//         name: "Mon 05/24",
//         value: 0.32,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.35,
//       },
//       {
//         name: "Wed 05/26",
//         value: 0.39,
//       },
//       {
//         name: "Thu 05/27",
//         value: 0.4,
//       },
//       {
//         name: "Fri 05/28",
//         value: 0.35,
//       },
//       {
//         name: "Sat 05/29",
//         value: 0.36,
//       },
      
//       {
//         name: "Sun 05/30",
//         value: 0.32,
//       },
      
//     ],
//   },
//   {
//     title: "Toplist",
//     color: "#22C55E",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.25,
//       },
//       {
//         name: "Sat 05/01",
//         value: 0.27,
//       },
//       {
//         name: "Sun 05/02",
//         value: 0.24,
//       },
//       {
//         name: "Mon 05/03",
//         value: 0.22,
//       },
//       {
//         name: "Tues 05/04",
//         value: 0.25,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.26,
//       },
//       {
//         name: "Thu 05/06",
//         value: 0.29,
//       },
//       {
//         name: "Fri 05/07",
//         value: 0.26,
//       },
//       {
//         name: "Sat 05/08",
//         value: 0.24,
//       },
//       {
//         name: "Sun 05/09",
//         value: 0.26,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.22,
//       },
//       {
//         name: "Tues 05/11",
//         value: 0.24,
//       },
//       {
//         name: "Wed 05/12",
//         value: 0.22,
//       },
//       {
//         name: "Thu 05/13",
//         value: 0.20,
//       },
//       {
//         name: "Fri 05/14",
//         value: 0.22,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.23,
//       },
//       {
//         name: "Sun 05/16",
//         value: 0.26,
//       },
//       {
//         name: "Mon 05/17",
//         value: 0.23,
//       },
//       {
//         name: "Tues 05/18",
//         value: 0.26,
//       },
//       {
//         name: "Wed 05/19",
//         value: 0.23,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.27,
//       },
//       {
//         name: "Fri 05/21",
//         value: 0.26,
//       },
//       {
//         name: "Sat 05/22",
//         value: 0.25,
//       },
//       {
//         name: "Sun 05/23",
//         value: 0.27,
//       },
//       {
//         name: "Mon 05/24",
//         value: 0.24,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.26,
//       },
//       {
//         name: "Wed 05/26",
//         value: 0.27,
//       },
//       {
//         name: "Thu 05/27",
//         value: 0.26,
//       },
//       {
//         name: "Fri 05/28",
//         value: 0.29,
//       },
//       {
//         name: "Sat 05/29",
//         value: 0.26,
//       },
      
//       {
//         name: "Sun 05/30",
//         value: 0.21,
//       },
      
//     ],
//   },
//   {
//     title: "Random",
//     color: "#B2BEB5",
//     data: [
//       {
//         name: "Fri 04/30",
//         value: 0.15,
//       },
//       {
//         name: "Sat 05/01",
//         value: 0.17,
//       },
//       {
//         name: "Sun 05/02",
//         value: 0.14,
//       },
//       {
//         name: "Mon 05/03",
//         value: 0.15,
//       },
//       {
//         name: "Tues 05/04",
//         value: 0.13,
//       },
//       {
//         name: "Wed 05/05",
//         value: 0.16,
//       },
//       {
//         name: "Thu 05/06",
//         value: 0.18,
//       },
//       {
//         name: "Fri 05/07",
//         value: 0.16,
//       },
//       {
//         name: "Sat 05/08",
//         value: 0.17,
//       },
//       {
//         name: "Sun 05/09",
//         value: 0.13,
//       },
//       {
//         name: "Mon 05/10",
//         value: 0.17,
//       },
//       {
//         name: "Tues 05/11",
//         value: 0.16,
//       },
//       {
//         name: "Wed 05/12",
//         value: 0.14,
//       },
//       {
//         name: "Thu 05/13",
//         value: 0.15,
//       },
//       {
//         name: "Fri 05/14",
//         value: 0.17,
//       },
//       {
//         name: "Sat 05/15",
//         value: 0.16,
//       },
//       {
//         name: "Sun 05/16",
//         value: 0.13,
//       },
//       {
//         name: "Mon 05/17",
//         value: 0.16,
//       },
//       {
//         name: "Tues 05/18",
//         value: 0.14,
//       },
//       {
//         name: "Wed 05/19",
//         value: 0.16,
//       },
//       {
//         name: "Thu 05/20",
//         value: 0.15,
//       },
//       {
//         name: "Fri 05/21",
//         value: 0.19,
//       },
//       {
//         name: "Sat 05/22",
//         value: 0.16,
//       },
//       {
//         name: "Sun 05/23",
//         value: 0.15,
//       },
//       {
//         name: "Mon 05/24",
//         value: 0.17,
//       },
//       {
//         name: "Tues 05/25",
//         value: 0.14,
//       },
//       {
//         name: "Wed 05/26",
//         value: 0.18,
//       },
//       {
//         name: "Thu 05/27",
//         value: 0.14,
//       },
//       {
//         name: "Fri 05/28",
//         value: 0.15,
//       },
//       {
//         name: "Sat 05/29",
//         value: 0.14,
//       },
      
//       {
//         name: "Sun 05/30",
//         value: 0.12,
//       },
      
//     ],
//   },
// ];



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

// const xDomain = [
//   "Fri 04/30",
//   "Wed 05/05",
//   "Mon 05/10",
//   "Sat 05/15",
//   "Thu 05/20",
//   "Tues 05/25",
//   "Sun 05/30",
// ];

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

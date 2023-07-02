import React from "react";
import "./App.css";

import { CustomBarChart } from "./CustomBarChart";

const App = () => {
  const chartData = {
    chartTitle: "Recall",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  const chartData2 = {
    chartTitle: "Precision",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  const chartData3 = {
    chartTitle: "NDCG",
    data: [
      {
        name: "Random",
        value: 0.2,
        color: "#D1D5DB",
      },
      {
        name: "Shaped",
        value: 0.5,
        color: "#A855F7",
      },
      {
        name: "Toplist",
        value: 0.8,
        color: "#0EA5E9",
      },
    ],
  };

  return (
    <div className="chart-container">
      {/* <CustomBarChart data={chartData.data} chartTitle={chartData.chartTitle} />
      <CustomBarChart data={chartData2.data} chartTitle={chartData2.chartTitle} />
      <CustomBarChart data={chartData3.data} chartTitle={chartData3.chartTitle} /> */}
      <CustomBarChart
        data={chartData.data}
        chartTitle={chartData.chartTitle}
        width={400}
        height={500}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        // yTicks={[0.2, 0.4, 0.6, 0.8, 1.0]}
      />
      <CustomBarChart
        data={chartData2.data}
        chartTitle={chartData2.chartTitle}
        width={400}
        height={500}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        // yTicks={[0.2, 0.4, 0.6, 0.8, 1.0]}
      />
      <CustomBarChart
        data={chartData3.data}
        chartTitle={chartData3.chartTitle}
        width={400}
        height={500}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        // yTicks={[0.2, 0.4, 0.6, 0.8, 1.0]}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import "./CustomBarChart.css";

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

interface SingleDataPointGraph {
  chartTitle?: string;
  data: DataPoint[];
}

interface CustomBarChartProps extends SingleDataPointGraph {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  // chartId: string;
  // yTicks: number[];
}

const CustomBarChart = ({
  data,
  chartTitle,
  width,
  height,
  margin,
}: // chartId, // Receive chartId as a prop
// yTicks,
CustomBarChartProps) => {
  const [tooltipData, setTooltipData] = useState<DataPoint | null>(null);

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleBand<string>({
    domain: data.map((d) => d.name),
    range: [0, xMax],
    padding: 0.5,
  });
  const yMin = 0;
  const yMaxi = Math.max(...data.map((d) => d.value)) + 0.2;

  const yScale = scaleLinear<number>({
    domain: [yMin, yMaxi],
    range: [yMax, 0],
    nice: true,
  });

  const tickValues = Array.from(
    new Set(yScale.ticks().map((value) => Math.ceil(value * 20) / 10))
  ).filter(
    (tick) => tick !== 0 && tick <= Math.ceil(yScale.domain()[1] * 10) / 10
  );

  return (
    <>
      <div className="flex justify-center items-center h-70 ">
        {/* {chartTitle && <h2 className='chart-title'>{chartTitle}</h2>} */}
        <div className="absolute top-20 font-bold text-3xl">
          {chartTitle && <h2>{chartTitle}</h2>}
        </div>
        {/* onMouseLeave={handleMouseLeave} */}
        <svg width={width} height={height}>
          <rect
            x={margin.left}
            y={margin.top}
            width={xMax}
            height={yMax}
            fill="none"
            stroke="gray"
          />
          {data.map((d) => (
            <Bar
              key={d.name}
              x={margin.left + xScale(d.name)!}
              y={margin.top + yScale(d.value)}
              height={yMax - yScale(d.value)}
              width={xScale.bandwidth()}
              fill={d.color}
              onMouseEnter={() => setTooltipData(d)}
              onMouseLeave={() => setTooltipData(null)}
            />
          ))}
          {xScale.domain().map((d) => (
            <g key={d}>
              <text
                x={margin.left - 30 + xScale(d)! + xScale.bandwidth() / 2}
                // x={margin.left + 30}
                y={height - margin.bottom}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(270 ${
                  margin.left + xScale(d)! + xScale.bandwidth() / 2
                },${height - margin.bottom})`}
                fontSize={10}
              >
                {d}
              </text>
            </g>
          ))}

          <g>
            {tickValues.map((tick, index) => (
              <text
                key={index}
                x={margin.left - 10}
                y={yScale(tick) + margin.top}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={10}
              >
                {tick}
              </text>
            ))}
          </g>
          {tooltipData && (
            <g
              transform={`translate(${
                margin.left + xScale(tooltipData.name)! + xScale.bandwidth() / 2
              }, ${margin.top + yScale(tooltipData.value) - 40})`}
            >
              <rect
                x={-40}
                y={-30}
                width={80}
                height={50}
                fill="#f9f9f9"
                stroke="gray"
                strokeWidth={1}
                rx={5}
              />
              <text
                x={0}
                y={-15}
                fontSize={10}
                textAnchor="middle"
                dominantBaseline="middle"
                
              >
                <tspan fill={tooltipData.color} fontWeight="bold">{tooltipData.name}</tspan>
                <tspan x={0} dy={15}>
                  {tooltipData.value}
                </tspan>
              </text>
            </g>
          )}
        </svg>
        {/* {tooltipData && (
          <Tooltip
            top={margin.top + yScale(tooltipData.value)+100}
            left={margin.left +190+ xScale(tooltipData.name)! + xScale.bandwidth() / 2}
            style={{
              ...defaultStyles,
              minWidth: 50,
              textAlign: "center",
              position: "absolute",
              zIndex: 1,
            }}
          >
            
            <strong style={{ color: tooltipData.color }}>{tooltipData.name}</strong>
            <br />
            {tooltipData.value}
          </Tooltip>
        )} */}
      </div>
    </>
  );
};

export { CustomBarChart };

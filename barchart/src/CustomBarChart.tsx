import React, { useState } from "react";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
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
  // yTicks: number[];
}

const CustomBarChart = ({
  data,
  chartTitle,
  width,
  height,
  margin,
}: // yTicks,
CustomBarChartProps) => {
  // const [tooltip, setTooltip] = useState<{
  //   x: number;
  //   y: number;
  //   value: number;
  //   name: string;
  // } | null>(null);

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleBand<string>({
    domain: data.map((d) => d.name),
    range: [0, xMax],
    padding: 0.4,
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
  ).filter((tick) => tick !== 0 && tick <= Math.ceil(yScale.domain()[1] * 10) / 10);

  // const handleMouseOver = (
  //   event: React.MouseEvent<SVGRectElement, MouseEvent>,
  //   value: number,
  //   name: string
  // ) => {
  //   const { x, y } = event.currentTarget.getBoundingClientRect();
  //   setTooltip({ x, y, value, name });
  // };

  // const handleMouseLeave = () => {
  //   setTooltip(null);
  // };

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
              // onMouseOver={(event) => handleMouseOver(event, d.value, d.name)}
              // onMouseLeave={handleMouseLeave}
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

          {/* {tooltip && (
            <g transform={`translate(${tooltip.x - 250}, ${tooltip.y - 100})`}>
              <rect
                x={-20}
                y={-10}
                width={100}
                height={50}
                fill="none"
                stroke="black"
                strokeWidth={0.1}
              />
              <text
                x={20}
                y={5}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={20}
              >
                <tspan fontWeight="bold">{tooltip.value}</tspan>
                <tspan
                  x={20}
                  y={20}
                  fontSize={15}
                  fill="black"
                  fontWeight="bold"
                >
                  {tooltip.name}
                </tspan>
              </text>
            </g>
          )} */}
        </svg>
      </div>
    </>
  );
};

export { CustomBarChart };

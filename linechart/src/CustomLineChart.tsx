import React, { useState } from "react";
import { AxisLeft, AxisRight, AxisBottom } from "@visx/axis";
import { scaleLinear, scaleBand } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { Group } from "@visx/group";
import { Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
// import "./CustomLineChart.css";
import { MouseEvent } from "react";
import { Circle, Line } from "@visx/shape";
import { useRef } from "react";
import { scalePoint } from "@visx/scale";
import {
  curveMonotoneX,
  curveLinear,
  curveStep,
  curveCardinal,
} from "@visx/curve";
import { data } from "autoprefixer";

interface DataPoint {
  name: string;
  value: number;
}

interface CustomDataPoint {
  name: string;
  value: number;
}

interface LineData {
  title: string;
  color: string;
  data: DataPoint[];
}

interface Point {
  x: number;
  y: number;
}

interface CustomLineChartProps {
  lines: LineData[];
  width: number;
  height: number;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  xDomain: string[];
}

export function CustomLineChart({
  lines,
  width,
  height,
  margin,
  xDomain,
}: CustomLineChartProps) {
  const tooltipLineRef = useRef<SVGLineElement>(null);
  const [tooltipData, setTooltipData] = useState<DataPoint | null>(null);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scalePoint<string>({
    domain: xDomain,
    range: [-margin.left - 30, width + 14],
    padding: 1, // Set custom padding to 4 when there are 5 or more data points
  });

  const allDataPoints = lines.flatMap((line) => line.data);
const xDataPoints = allDataPoints.map((d) => d.name);

const xscale = scalePoint<string>({
  domain: xDataPoints,
  range: [-margin.left - 30, width + 14],
  padding: 4, // Set custom padding to 4 when there are 5 or more data points
});

  // const isDateInDomain = (date: string) => xDomain.includes(date);
  // const isDateInDomain = (date: string) => {
  //   for (const line of lines) {
  //     const foundDataPoint = line.data.find(
  //       (dataPoint) => dataPoint.name === date
  //     );
  //     if (foundDataPoint) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  const yMin = 0.0;
  const yMaxi =
    Math.max(...lines.flatMap((line) => line.data.map((d) => d.value))) + 0.6;

  const yScale = scaleLinear<number>({
    domain: [yMin, yMaxi],
    range: [height - margin.bottom, margin.top],
  });

  const tickValues = Array.from(
    new Set(yScale.ticks().map((value) => Math.ceil(value * 20) / 10))
  ).filter(
    (tick) => tick !== 0 && tick <= Math.ceil(yScale.domain()[1] * 10) / 10
  );

  // const averageValue = lines[0].data.reduce((sum, data) => sum + data.value, 0) / lines[0].data.length;
  const titleAverages = lines.map((line) => {
    const average =
      line.data.reduce((sum, data) => sum + data.value, 0) / line.data.length;
    return { title: line.title, average };
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-10">
        {titleAverages.map(({ title, average }) => (
          <span
            key={title}
            style={{
              color: lines.find((line) => line.title === title)?.color,
            }}
          >
            {title}
            <br />
            <span className="text-black text-2xl">{average.toFixed(2)}</span>
            <br />
            <br />
            <br />
          </span>
        ))}
      </div>

      <svg width={width} height={height}>
        <rect
          x={margin.left}
          y={margin.top}
          width={xMax}
          height={yMax}
          fill="none"
          stroke="gray"
        />

        <g transform={`translate(0, ${height - margin.bottom})`}>
          {xScale.domain().map((value, index) => (
            <text
              key={index}
              x={margin.left - 30 + xScale(value)! + xScale.bandwidth() / 2}
              y={15}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
            >
              {value}
            </text>
          ))}
        </g>

        <g transform={`translate(${width - margin.right}, 0)`}>
          {tickValues.map((value, index) => (
            <text
              key={index}
              x={20}
              y={yScale(value)}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={10}
            >
              {value}
            </text>
          ))}
        </g>

        {/* <Group>
          {lines.map((line) => (
            <LinePath
              key={line.title}
              // data={line.data}
              data={customData} // Use the custom data array
              // x={(d) => xScale(d.name) ?? 0}
              x={(d) => xScale(d.name)?? 0}
              y={(d) => yScale(d.value)}
              stroke={line.color}
              strokeWidth={2}
              strokeOpacity={0.8}
            />
          ))} */}

        {/* <Group>

          {lines.map((line) => {
            const customDataForLine: CustomDataPoint[] = xDomain.map((date) => {
              const dataPoint = line.data.find((d) => d.name === date);
              return dataPoint ? { ...dataPoint } : { name: date, value: 0 };
            });

            return (
              <LinePath
                key={line.title}
                data={customDataForLine} // Use the custom data array for each line
                x={(d) => xScale(d.name) ?? 0}
                y={(d) => yScale(d.value)}
                stroke={line.color}
                strokeWidth={2}
                strokeOpacity={0.8}
                curve={curveCardinal}
              />
            );
          })}

         
          {lines.map((line) =>
            line.data.map((d, index) => {
              const date = d.name;
              if (isDateInDomain(date)) {
                return (
                  <g
                    key={index}
                    onMouseEnter={() => setTooltipData(d)}
                    onMouseLeave={() => setTooltipData(null)}
                  >
                    <Circle
                      cx={xScale(date) ?? 0}
                      cy={yScale(d.value)}
                      r={3} // Adjust the size of the circles
                      fill={line.color}
                    />
                  </g>
                );
              }
              return null;
            })
          )}
        </Group> */}

        <Group>
          {lines.map((line) => {
            const customDataForLine: CustomDataPoint[] = xDomain.map((date) => {
              const dataPoint = line.data.find((d) => d.name === date);
              return dataPoint ? { ...dataPoint } : { name: date, value: 0 };
            });
            

            return (
              <>
                <LinePath
                  key={line.title}
                  // data={customDataForLine}
                  data={line.data}
                  x={(d) => xscale(d.name) ?? 0}
                  y={(d) => yScale(d.value)}
                  stroke={line.color}
                  strokeWidth={2}
                  strokeOpacity={0.8}
                  curve={curveMonotoneX} // Use this to make the curve smooth
                />

                {lines.map((line) =>
                  line.data.map((d, index) => {
                    const date = d.name;
                    if (date) {
                      return (
                        <g
                          key={index}
                          onMouseEnter={() => setTooltipData(d)}
                          onMouseLeave={() => setTooltipData(null)}
                        >
                          <Circle
                            cx={xscale(date) ?? 0}
                            cy={yScale(d.value)}
                            r={2} // Adjust the size of the circles
                            fill={line.color}
                          />
                        </g>
                      );
                    }
                    return null;
                  })
                )}
              </>
            );
          })}
        </Group>

        {tooltipData && (
          <g
            transform={`translate(${
              xscale(tooltipData.name)! + margin.left - 40
            },${yScale(tooltipData.value) + margin.top - 60})`}
          >
            {/* Render the tooltip line above the data point */}

            <rect
              x={-40}
              y={-25}
              width={90}
              height={60}
              fill="#f9f9f9"
              stroke="gray"
              strokeWidth={2}
              rx={5}
            />
            {/* <Line
              from={{ x: xscale.bandwidth() / 2, y: margin.top - 150 }}
              to={{ x: xScale.bandwidth() / 2, y: margin.bottom + 110 }}
              stroke="gray"
              strokeWidth={2}
              pointerEvents="none"
            /> */}

            <text
              x={0}
              y={-12}
              fontSize={10}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {/* Display the title of the line */}
              <tspan
                x={0}
                dy={5} // First line, adjust the dy value for spacing
                fill={
                  lines.find((line) => line.data.includes(tooltipData))?.color
                }
              >
                {lines.find((line) => line.data.includes(tooltipData))?.title}
              </tspan>
              <tspan x={0} dy={15}>
                {/* tooltipData.name */}
                {tooltipData.name}
              </tspan>
              <tspan x={0} dy={15} fontWeight="bold">
                {tooltipData.value}
              </tspan>
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

import React, { useState } from "react";
import { AxisLeft, AxisRight, AxisBottom } from "@visx/axis";
import { scaleLinear, scaleBand } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { Group } from "@visx/group";
import { withTooltip, Tooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
// import "./CustomLineChart.css";
import { MouseEvent } from "react";

interface DataPoint {
  name: string;
  value: number;
}

interface LineData {
  title: string;
  color: string;
  data: DataPoint[];
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
  // yRange: number[];
  xDomain: string[];
  // tooltipOpen: boolean;
  // tooltipLeft: number;
  // tooltipTop: number;
  // tooltipData: DataPoint | undefined;
  // hideTooltip: () => void;
  // showTooltip: (event: React.MouseEvent<Element, MouseEvent>, data: DataPoint) => void;
}

const formatLabel = (label: string): string => {
  const [day, time] = label.split(" ");
  return `${day}\n${time}`;
};

export function CustomLineChart({
  lines,
  width,
  height,
  margin,
  xDomain,
}: // tooltipOpen,
// tooltipLeft,
// tooltipTop,
// tooltipData,
// hideTooltip,
// showTooltip,
CustomLineChartProps) {
  const [tooltipData, setTooltipData] = useState<DataPoint | undefined>(
    undefined
  );
  const [tooltipLeft, setTooltipLeft] = useState<number>(0);
  const [tooltipTop, setTooltipTop] = useState<number>(0);
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const showTooltip = (
    event: React.MouseEvent<SVGPathElement, globalThis.MouseEvent>,
    data: DataPoint
  ) => {
    const { clientX, clientY } = event;
    setTooltipData(data);
    setTooltipLeft(clientX);
    setTooltipTop(clientY);
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipOpen(false);
  };


  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;


  const xScale = scaleBand<string>({
    domain: xDomain, // Use xDomain prop
    range: [-margin.left - 28, width + 14],
    padding: 1,
  });

  const yMin = 0;
  const yMaxi =
    Math.max(...lines.flatMap((line) => line.data.map((d) => d.value))) + 0.2;

  const yScale = scaleLinear<number>({
    domain: [yMin, yMaxi],
    range: [height - margin.bottom, margin.top],
  });

const tickValues = Array.from(
    new Set(yScale.ticks().map((value) => Math.ceil(value * 20) / 10))
  ).filter((tick) => tick !== 0 && tick <= Math.ceil(yScale.domain()[1] * 20) / 10);

  // const averageValue = lines[0].data.reduce((sum, data) => sum + data.value, 0) / lines[0].data.length;
  const titleAverages = lines.map((line) => {
    const average =
      line.data.reduce((sum, data) => sum + data.value, 0) / line.data.length;
    return { title: line.title, average };
  });

  // const handleMouseHover = (
  //   event: React.MouseEvent<SVGRectElement, MouseEvent>,
  //   data: DataPoint
  // ) => {
  //   const { clientX, clientY } = event;
  //   showTooltip({
  //     tooltipData: data,
  //     tooltipLeft: clientX,
  //     tooltipTop: clientY,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   hideTooltip();
  // };

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

      <svg width={width} height={height} onMouseLeave={hideTooltip}>
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

        <Group>
          {lines.map((line) => (
            <LinePath
              key={line.title}
              data={line.data}
              x={(d) => xScale(d.name) ?? 0}
              y={(d) => yScale(d.value)}
              stroke={line.color}
              strokeWidth={2}
              strokeOpacity={0.8}
              // onMouseMove={(event) => handleMouseHover(event, line.data)}
              // onMouseLeave={handleMouseLeave}
              onMouseMove={(event) => showTooltip(event, line.data[0])}
              onMouseLeave={hideTooltip}
            />
          ))}
        </Group>

        {tooltipOpen && tooltipData && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            style={{ backgroundColor: "white", color: "#333" }}
          >
            <strong>{tooltipData.name}</strong>
            <br />
            Value: {tooltipData.value.toFixed(2)}
          </Tooltip>
        )}
      </svg>
    </div>
  );
}

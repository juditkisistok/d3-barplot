import * as d3 from "d3";
import { data, width, height, barColor } from "./Constants";

export default function EconomistBarplot() {
  // sort data by count in descending order
  data.sort((a, b) => b.count - a.count);

  // set up scales
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.count)])
    .range([0, width]);

  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, height])
    .padding(0.4);

  // create bars
  const allBars = data.map((d, i) => (
    <rect
      key={i}
      x={0}
      y={yScale(d.name)}
      width={xScale(d.count)}
      height={yScale.bandwidth()}
      fill={barColor}
    />
  ));

  const allLabels = data.map((d, i) => (
    <text
      key={i}
      x={xScale(d.count) + 5}
      y={yScale(d.name) + yScale.bandwidth() / 2}
      alignmentBaseline="middle"
      fontSize="12px"
      fill="#333"
    >
      {d.name}
    </text>
  ));

  return (
    <div className="economist-barplot">
      <h1>Escape artists</h1>
      <p>Number of laboratory-acquired infections, 1970-2021</p>
      <svg width={width} height={height}>
        <g>
          {allBars}
          {allLabels}
        </g>
      </svg>
      <p className="source">
        Sources: Laboratory-Acquired Infection Database; American Biological
        Safety Association
      </p>
      <p className="source">The Economist</p>
    </div>
  );
}

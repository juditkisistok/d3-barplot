import * as d3 from "d3";

export default function Barplot({ data, width = 500, height = 400 }) {
  const axisY = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, height])
    .padding(0.1);

  const axisX = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([0, width]);

  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect
          key={d.country}
          x={0}
          y={axisY(d.country)}
          width={axisX(d.students)}
          height={axisY.bandwidth()}
          fill="steelblue"
        />
      ))}
    </svg>
  );
}

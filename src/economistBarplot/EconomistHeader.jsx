export default function EconomistHeader({ width }) {
  const topLine = (
    <line
      x1={0}
      y1={0}
      x2={width - 50}
      y2={0}
      stroke="rgb(229, 1, 28)"
      strokeWidth={1}
    />
  );

  const topBox = (
    <rect x={0} y={0} width={40} height={10} fill="rgb(229, 1, 28)" />
  );

  return (
    <g>
      {topLine}
      {topBox}
    </g>
  );
}

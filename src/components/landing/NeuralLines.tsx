const anchors = [
  { x: 175, y: 150 },
  { x: 835, y: 130 },
  { x: 845, y: 560 },
  { x: 165, y: 555 },
];

const C = { x: 500, y: 340 };

function curve(a: { x: number; y: number }) {
  const midX = (a.x + C.x) / 2;
  return `M ${C.x} ${C.y} C ${midX} ${C.y}, ${a.x} ${(a.y + C.y) / 2}, ${a.x} ${a.y}`;
}

export function NeuralLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(201 184 160)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="rgb(167 139 113)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {anchors.map((a, i) => (
        <g key={i}>
          <path
            d={curve(a)}
            fill="none"
            stroke="url(#node-grad)"
            className="node-line"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
          <path
            d={curve(a)}
            fill="none"
            stroke="rgb(167 139 113)"
            strokeWidth={1}
            strokeOpacity={0.5}
            className="flow-line"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <circle cx={a.x} cy={a.y} r={4} fill="rgb(201 184 160)" className="node-line" />
        </g>
      ))}
      <circle cx={C.x} cy={C.y} r={6} fill="rgb(232 213 183)" />
    </svg>
  );
}
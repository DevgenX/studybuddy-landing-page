import type { CSSProperties } from "react";

type StudyBuddyCursorTriangleProps = {
  className?: string;
  style?: CSSProperties;
  glow?: number;
};

export default function StudyBuddyCursorTriangle({
  className,
  style,
  glow = 8,
}: StudyBuddyCursorTriangleProps) {
  const size = 16;
  const half = size / 2;
  const triangleHeight = (size * Math.sqrt(3)) / 2;
  const topY = half - triangleHeight / 1.5;
  const bottomY = half + triangleHeight / 3;
  const points = `${half},${topY.toFixed(1)} 0,${bottomY.toFixed(1)} ${size},${bottomY.toFixed(1)}`;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{
        overflow: "visible",
        filter: `drop-shadow(0 0 ${glow}px #3b82f6)`,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={points} fill="#3b82f6" />
    </svg>
  );
}

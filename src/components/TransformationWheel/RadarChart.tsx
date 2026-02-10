import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface RadarChartProps {
  labels: string[];
  values: number[];
  maxValue: number;
  onLabelClick: (index: number) => void;
  activeIndex: number | null;
}

const SIZE = 340;
const CENTER = SIZE / 2;
const RADIUS = 130;
const LABEL_RADIUS = RADIUS + 45;

function polarToCart(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

const RadarChart = ({ labels, values, maxValue, onLabelClick, activeIndex }: RadarChartProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const n = labels.length;
  const angleStep = 360 / n;

  const gridRings = [2, 4, 6, 8, 10];

  const filledPath = useMemo(() => {
    const points = values.map((v, i) => {
      const r = (v / maxValue) * RADIUS;
      return polarToCart(i * angleStep, r);
    });
    if (points.every((_, i) => values[i] === 0)) return "";
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  }, [values, maxValue, angleStep]);

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[340px] mx-auto select-none">
      {/* Grid rings */}
      {gridRings.map((ring) => {
        const r = (ring / maxValue) * RADIUS;
        const points = Array.from({ length: n }, (_, i) => polarToCart(i * angleStep, r));
        const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
        return <path key={ring} d={d} fill="none" stroke="hsl(263 70% 58% / 0.12)" strokeWidth="1" />;
      })}

      {/* Axis lines */}
      {Array.from({ length: n }, (_, i) => {
        const end = polarToCart(i * angleStep, RADIUS);
        return (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={end.x}
            y2={end.y}
            stroke="hsl(263 70% 58% / 0.15)"
            strokeWidth="1"
          />
        );
      })}

      {/* Filled area */}
      {filledPath && (
        <motion.path
          d={filledPath}
          fill="hsl(263 70% 58% / 0.25)"
          stroke="hsl(263 70% 58%)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />
      )}

      {/* Data points */}
      {values.map((v, i) => {
        if (v === 0) return null;
        const pos = polarToCart(i * angleStep, (v / maxValue) * RADIUS);
        return (
          <motion.circle
            key={`dot-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={5}
            fill="hsl(263 70% 58%)"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        );
      })}

      {/* Labels */}
      {labels.map((label, i) => {
        const pos = polarToCart(i * angleStep, LABEL_RADIUS);
        const isHovered = hoveredIndex === i;
        const isActive = activeIndex === i;
        const hasValue = values[i] > 0;

        return (
          <g
            key={i}
            onClick={() => onLabelClick(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
          >
            {/* Hit area */}
            <circle cx={pos.x} cy={pos.y} r={28} fill="transparent" />

            {/* Glow on hover */}
            {(isHovered || isActive) && (
              <circle cx={pos.x} cy={pos.y} r={26} fill="hsl(263 70% 58% / 0.12)" />
            )}

            <text
              x={pos.x}
              y={pos.y - (hasValue ? 4 : 0)}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-[9px] font-semibold fill-foreground pointer-events-none"
              style={{ direction: "rtl" }}
            >
              {label}
            </text>

            {hasValue && (
              <text
                x={pos.x}
                y={pos.y + 12}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[10px] font-bold pointer-events-none"
                fill="hsl(263 70% 58%)"
              >
                {values[i]}
              </text>
            )}
          </g>
        );
      })}

      {/* Center pulse */}
      <motion.circle
        cx={CENTER}
        cy={CENTER}
        r={4}
        fill="hsl(263 70% 58% / 0.4)"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default RadarChart;

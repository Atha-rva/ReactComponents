import React, { useState, useEffect } from "react";
import { useStyles } from "./Zprogresscss";
import { mergeClasses } from "@fluentui/react-components";

interface CircularProgressProps {
  radius: number;
  strokeWidth: number;
  percentage: number;
  texttitleclassName: string;
  circleFactor: number;
}

const Zprogress: React.FC<CircularProgressProps> = ({
  radius,
  strokeWidth,
  percentage,
  texttitleclassName,
  circleFactor,
  ...Props
}) => {
  const classes = useStyles();
  const [normalizedRadius, setNormalizedRadius] = useState(
    radius - strokeWidth / circleFactor
  );
  const [circumference, setCircumference] = useState(
    2 * Math.PI * normalizedRadius
  );
  const [offset, setOffset] = useState(circumference);
  const [animatedOffset, setAnimatedOffset] = useState(circumference);
  const [color, setColor] = useState("#4caf50");

  useEffect(() => {
    const newCircumference = 2 * Math.PI * normalizedRadius;
    setCircumference(newCircumference);
    const newOffset = newCircumference - (percentage / 100) * newCircumference;
    setOffset(newOffset);
    animateFill(newOffset);

    if (percentage <= 25) {
      setColor("#ff0000");
    } else if (percentage <= 50) {
      setColor("#ffa500");
    } else if (percentage <= 80) {
      setColor("#ffff00");
    } else {
      setColor("#008000");
    }
  }, [percentage, normalizedRadius]);

  const animateFill = (newOffset: number) => {
    const duration = 500;
    let start = performance.now();

    const animate = (time: number) => {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      const currentOffset = offset - (offset - newOffset) * timeFraction;
      setAnimatedOffset(currentOffset);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#D1D1D1"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset: animatedOffset,
            transition: "stroke-dashoffset 1s ease", // Smooth transition
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <text
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={radius / 2}
          fill="#000"
          className={mergeClasses(classes.root, texttitleclassName)}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default Zprogress;

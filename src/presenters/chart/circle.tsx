import React from "react";

interface Props {
  score: number;
  size: number;
  color: string;
}

export const Circle: React.FC<Props> = ({
  score,
  size,
  color,
}) => {
  const r = 100 / (2 * Math.PI);
  const width = size;
  const height = size;
  const viewBoxPosition = Math.floor((width - (r + r)) / 2);

  const compositeColor = (code: string, alpha: number) => {
    const colorCode = parseInt(code, 16) * alpha + 255 * (1 - alpha);
    return Math.floor(colorCode).toString(16);
  }

  const convertToPaleColor = (colorCode: string, alpha: number) => {
    // colorCodeは`#`を除いた16進数とします。
    const codes = [colorCode.slice(0, 2), colorCode.slice(2, 4), colorCode.slice(4, 6)];
    return codes.map(code => compositeColor(code, alpha)).join("");
  }
  
  const paleColor = '#' + convertToPaleColor(color.slice(1), 0.2);

  return (
    <svg width={width} height={height} viewBox={'0 0 40 40'}>
      <path
        d={`M20 ${(40 - (r + r)) / 2}
        a ${r} ${r} 0 0 1 0 ${r + r}
        a ${r} ${r} 0 0 1 0 -${r + r}`}
        fill="none"
        stroke={paleColor}
        strokeWidth="6"
        strokeDasharray="1"
      />
      <path
        d={`M20 ${(40 - (r + r)) / 2}
        a ${r} ${r} 0 0 1 0 ${r + r}
        a ${r} ${r} 0 0 1 0 -${r + r}`}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={`${score} 100`}
        className="chartCircle"
      />
      <text x="15" y="23" fontSize=".35em" textAnchor="center">
        {score}%
      </text>
    </svg>
  );
};



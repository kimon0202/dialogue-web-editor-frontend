import React from 'react';

interface Props {
  from: {
    x: number;
    y: number;
  };
  to: {
    x: number;
    y: number;
  };
  markerMid: string;
}

const Connection: React.FC<Props> = ({
  from: { x: x1, y: y1 },
  to: { x: x2, y: y2 },
  markerMid,
}) => {
  return (
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      markerUnits={2}
      d={`M${x1 + 75},${y1 + 50}L${(x1 + x2 + 150) / 2},${
        (y1 + y2 + 100) / 2
      }L${x2 + 75},${y2 + 50}`}
      markerMid={markerMid}
    />
  );
};

export default Connection;

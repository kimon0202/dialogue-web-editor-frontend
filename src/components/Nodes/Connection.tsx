import React from 'react';

import { dark } from '../../styles/themes/dark';

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
      stroke={dark.colors.textSecondary}
      strokeWidth={2}
      strokeLinecap="round"
      markerUnits={2}
      d={`M${x1 + 100},${y1 + 75}L${(x1 + x2 + 200) / 2},${
        (y1 + y2 + 150) / 2
      }L${x2 + 100},${y2 + 75}`}
      markerMid={markerMid}
    />
  );
};

export default Connection;

import React, { useEffect, useState } from 'react';

import { Container, ContextItem } from './styles';

interface Position {
  x: number;
  y: number;
}

export interface Option {
  label: string;
  callback?(event: React.MouseEvent<any, MouseEvent>): void;
}

interface Props {
  options: Option[];
  visible: boolean;
  changeVisibility(state: boolean): void;
}

const ContextMenu: React.FC<Props> = ({
  options,
  visible,
  changeVisibility,
}) => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    const { clientX: x, clientY: y } = event;

    setPosition({ x, y });
  };

  const handleContextMenuBlur = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();

    changeVisibility(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    // document.addEventListener('click', handleContextMenuBlur);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      // document.removeEventListener('click', handleContextMenuBlur);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Container x={position.x} y={position.y}>
      {options.map((item, index, arr) => {
        return (
          <ContextItem
            key={index.toString()}
            last={arr.length - 1 === index}
            onClick={(event) => {
              if (item.callback) item.callback(event);
              handleContextMenuBlur(event);
            }}
          >
            {item.label}
          </ContextItem>
        );
      })}
    </Container>
  );
};

export default ContextMenu;

import styled from 'styled-components';

interface ContainerProps {
  x: number;
  y: number;
}

interface ContextItemProps {
  last: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: ${(props: ContainerProps) => props.y}px;
  left: ${(props: ContainerProps) => props.x + 5}px;

  z-index: 300;
`;

export const ContextItem = styled.div`
  background: #fff;
  border-bottom: ${(props: ContextItemProps) =>
    !props.last ? 'dotted 1px #ccc' : null};
  padding: 5px 25px;

  cursor: pointer;

  :hover {
    background: #f1f1f1;
  }
`;

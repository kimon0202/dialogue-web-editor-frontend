import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: ${(props) => props.theme.colors.background};
`;

export const DragLayer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  position: fixed;

  pointer-events: none;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
`;

export const DragLayer = styled.div`
  width: 100vw;
  height: 90vh;
  left: 0;
  top: 0;
  z-index: 100;
  position: fixed;
  pointer-events: none;
`;

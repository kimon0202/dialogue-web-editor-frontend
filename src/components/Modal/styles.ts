import styled from 'styled-components';

export const Backdrop = styled.div`
  background: rgba(10, 10, 10, 0.5);
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: absolute;
  background: transparent;
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 300;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

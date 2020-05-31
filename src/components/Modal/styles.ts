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

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;

  z-index: 1000;
`;

import React from 'react';

import { Backdrop, Container } from './styles';

interface Props {
  children?: React.ReactElement | string;
  show: boolean;
  onBackdropClick?(): void;
}

const Modal: React.FC<Props> = ({ children, show, onBackdropClick }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onBackdropClick} />
      <Container>{children}</Container>
    </>
  );
};

export default Modal;

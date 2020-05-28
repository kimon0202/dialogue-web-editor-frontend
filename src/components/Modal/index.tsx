import React from 'react';

import { Backdrop, Container } from './styles';

interface Props {
  children?: React.ReactElement | string;
  show: boolean;
  showBackdrop?: boolean;
  onBackdropClick?(): void;
}

const Modal: React.FC<Props> = ({
  children,
  show,
  onBackdropClick,
  showBackdrop = true,
}) => {
  if (!show) {
    return null;
  }

  return (
    <>
      {showBackdrop ? <Backdrop onClick={onBackdropClick} /> : null}
      <Container>{children}</Container>
    </>
  );
};

export default Modal;

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalContainer, ModalWrapper } from './styles';

interface PortalModalProps {
  isVisible: boolean;
  children?: React.ReactElement | React.ReactNode | string;
  onBackdropClick?(): void;
  onCloseRequest?(): void;
}

const PortalModal: React.FC<PortalModalProps> = ({
  isVisible,
  children,
  onBackdropClick,
  onCloseRequest,
}) => {
  const modalRoot = document.getElementById('modal-root');
  const parentElement = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(parentElement);

    return () => {
      modalRoot?.removeChild(parentElement);
    };
  }, [modalRoot, parentElement]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <ModalWrapper>
      <ModalBackdrop onClick={onBackdropClick} />
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>,
    parentElement,
  );
};

export default PortalModal;

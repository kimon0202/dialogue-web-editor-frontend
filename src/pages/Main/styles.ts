import { Form as RawForm } from '@unform/web';
import styled from 'styled-components';

interface ModalContainerProps {
  width?: number;
  height?: number;
}

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.backgroundSecondary};
  width: ${(props: ModalContainerProps) => props.width || 400}px;
  height: ${(props: ModalContainerProps) => props.height || 400}px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.textSecondary};
`;

export const ModalTitle = styled.h2`
  width: 100%;
  height: 12.5%;

  padding: 8px 24px;
  text-align: center;

  color: ${(props) => props.theme.colors.text};
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 87.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled(RawForm)`
  width: 100%;
  height: 100%;

  padding: 24px;
`;

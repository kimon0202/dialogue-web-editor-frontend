import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => darken(0.3, props.theme.colors.background)};
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-size: 24px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text};

  padding-top: 20px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

import { shade } from 'polished';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.accent};
  cursor: pointer;

  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 60px;

  color: #fff;
  font-weight: bold;
  font-size: 20px;

  :hover {
    background: ${(props) => shade(0.25, props.theme.colors.accent as string)};
  }
`;

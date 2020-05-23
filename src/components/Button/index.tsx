import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  children?: React.ReactElement | string;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

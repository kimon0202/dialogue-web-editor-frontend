import { Close, Menu } from '@material-ui/icons';
import AnimateHeight from 'react-animate-height';
import { animated } from 'react-spring';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8em;
  font-weight: bold;

  color: ${(props) => props.theme.colors.text};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 16px;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 16px 32px;
  background: ${(props) => props.theme.colors.backgroundSecondary};

  font-size: 30px;
  position: sticky;
`;

export const MenuIcon = styled(Menu)`
  color: white;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: white;
  cursor: pointer;
`;

// Add smooth transition later

interface ContainerProps {
  height: number | string;
}

export const Container = styled(AnimateHeight)`
  position: absolute;
  z-index: 400;
  top: 10vh;
  left: 0;
  width: 400px;
  height: ${(props: ContainerProps) => props.height};

  background: ${(props) => props.theme.colors.backgroundSecondary};
`;

export const AnimatedIconContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 100%;

  padding: 8px 16px;
  margin-right: 4px;
`;

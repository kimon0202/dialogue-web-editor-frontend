import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    font-family: 'Fira Code', monospace;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export const SidebarContainer = styled.div`
  width: 15vw;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 85vw;
  height: 100vh;
`;

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

import { createGlobalStyle } from 'styled-components';

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
    background: ${(props) => props.theme.colors.background};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  #modal-root {
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    /* pointer-events: none; */
    z-index: 1000;
  }
`;

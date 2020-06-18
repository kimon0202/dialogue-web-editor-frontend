import 'mobx-react-lite/batchingForReactDom';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Main from './pages/Main';
import { GlobalStyles } from './styles/global';
import { dark } from './styles/themes/dark';

// import { light } from './styles/themes/light';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * TODO: Select component receive initial values
 * TODO: Connections not showing properly
 */

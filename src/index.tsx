import 'mobx-react-lite/batchingForReactDom';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import {
  ContentContainer,
  GlobalStyles,
  RootContainer,
  SidebarContainer,
} from './styles/global';
import { dark } from './styles/themes/dark';

// import { light } from './styles/themes/light';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <RootContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>
          <Main />
        </ContentContainer>
      </RootContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

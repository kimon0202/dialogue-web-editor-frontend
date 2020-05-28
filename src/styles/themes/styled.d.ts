import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      backgroundSecondary: string;
      primary: string;
      accent: string;
      text: string;
      textSecondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
  }
}

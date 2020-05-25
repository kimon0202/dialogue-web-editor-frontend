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
    };
  }
}

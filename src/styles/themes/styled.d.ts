import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      text: string;
      textSecondary?: string;
      background: string;
      sidebar: string;
      primary: string;
      accent?: string;
    };
  }
}

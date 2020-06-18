import { DefaultTheme } from 'styled-components';
// maybe change this to be returned by a
// function that recives props as parameters
export interface DropdownStyle {
  containerStyles?: React.CSSProperties;
  listStyles?: React.CSSProperties;
  itemsStyles?: React.CSSProperties;
}

export interface DropdownContainerProps {
  width: React.ReactText;
}

export interface DropdownItemProps {
  isLast: boolean;
  isActive: boolean;
  backgroundColor: string;
  selectedColor: string;
  theme: DefaultTheme;
}

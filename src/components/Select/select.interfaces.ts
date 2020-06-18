import { CSSProperties } from 'react';

export interface SelectStyles {
  containerStyles?: CSSProperties;
  inputStyles?: CSSProperties;
  selectedItemsContainerStyles?: CSSProperties;
  selectedItemStyles?: CSSProperties;
}

export interface SelectContainerProps {
  width: React.ReactText;
  height: React.ReactText;
  isFocused: boolean;
  hasError: boolean;
  focusedColor: string;
  errorColor: string;
}

export interface ErrorMessageProps {
  color: string;
}

export interface SelectedItemProps {
  isLast: boolean;
}

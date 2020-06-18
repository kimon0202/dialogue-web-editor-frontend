import { shade } from 'polished';
import styled from 'styled-components';

import {
  DropdownContainerProps,
  DropdownItemProps,
} from './dropdown.interfaces';

export const Container = styled.div`
  height: auto;
  width: ${(props: DropdownContainerProps) =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};

  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;

  position: absolute;
  z-index: 999999;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  font-family: sans-serif;
`;

export const DropdownItem = styled.li`
  padding: 8px 24px;
  margin: 0;
  cursor: pointer;

  border-bottom: ${(props: DropdownItemProps) =>
    props.isLast ? '' : '1px dashed #ccc'};

  background: ${(props: DropdownItemProps) =>
    props.isActive ? props.theme.colors.primary : props.backgroundColor};

  &:hover {
    background: ${(props: DropdownItemProps) =>
      shade(
        0.1,
        props.isActive ? props.theme.colors.primary : props.backgroundColor,
      )};
  }

  &:active {
    background: ${(props: DropdownItemProps) =>
      shade(
        0.15,
        props.isActive ? props.theme.colors.primary : props.backgroundColor,
      )};
  }
`;

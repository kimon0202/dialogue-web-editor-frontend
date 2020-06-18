/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import {
  SelectContainerProps,
  ErrorMessageProps,
  SelectedItemProps,
} from './select.interfaces';

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;

  width: ${(props: SelectContainerProps) =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};

  height: ${(props: SelectContainerProps) =>
    typeof props.height === 'string' ? props.height : `${props.height}px`};

  border: ${(props: SelectContainerProps) =>
    props.isFocused
      ? props.hasError
        ? `1px solid ${props.errorColor}`
        : `1px solid ${props.focusedColor}`
      : props.hasError
      ? `1px solid ${props.errorColor}`
      : '1px solid black'};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  padding: 0 8px;
`;

export const InputWrrapper = styled.div`
  flex: 1;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 0;
  border: none;

  font-family: sans-serif;
  font-size: 16px;
  outline: none;
`;

export const Icon = styled.div`
  height: 100%;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.span`
  width: 1px;
  height: 60%;
  background: black;
`;

export const IconSVG = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  /* transform: translateY(10%); */
`;

export const ErrorMessage = styled.span`
  color: ${(props: ErrorMessageProps) => props.color};
  font-size: 14px;
  font-weight: medium;
`;

export const SelectedItemsContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 0 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SelectedItem = styled.div`
  height: 60%;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* TODO: props background color */
  background: #f1f1f1;
  border-radius: 4px;

  margin-right: ${(props: SelectedItemProps) => (props.isLast ? '0px' : '4px')};
`;

export const SelectedItemText = styled.p`
  padding: 4px;
  font-size: 14px;
`;

export const SelectWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectLabel = styled.label`
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

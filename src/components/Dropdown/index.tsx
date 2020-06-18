import React, { forwardRef } from 'react';

import { OptionBase } from '../../types/Option';
import { Container, DropdownItem, List } from './styles';
import { DropdownStyle } from './dropdown.interfaces';

interface DropdownProps extends DropdownStyle {
  options: OptionBase[];
  isVisible: boolean;
  setIsVisible: (state: boolean) => void;

  width?: React.ReactText;
  backgroundColor?: string;
  selectedColor?: string;

  selectOptions?: (selectedOptions: OptionBase[]) => void;
  selectedOption?: OptionBase;

  customDropdownItem?: React.ReactNode;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options,
      isVisible,
      setIsVisible,
      width = 500,
      backgroundColor = '#fff',
      selectedColor = '#07bcaa',
      containerStyles = undefined,
      listStyles = undefined,
      itemsStyles = undefined,
      selectOptions = () => null,
      selectedOption = undefined,
      customDropdownItem = null,
    },
    ref,
  ) => {
    if (!isVisible) return null;

    return (
      <Container width={width} style={containerStyles} ref={ref}>
        <List style={listStyles}>
          {options.map((option, index, arr) => {
            return (
              customDropdownItem || (
                <DropdownItem
                  key={option.value}
                  style={itemsStyles}
                  isLast={index === arr.length - 1}
                  isActive={selectedOption === option}
                  backgroundColor={backgroundColor}
                  selectedColor={selectedColor}
                  onClick={() => {
                    selectOptions([option]);
                    setIsVisible(false);
                  }}
                >
                  <span>{option.label}</span>
                </DropdownItem>
              )
            );
          })}
        </List>
      </Container>
    );
  },
);

export default Dropdown;

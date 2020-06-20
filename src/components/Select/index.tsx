/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  CSSProperties,
} from 'react';
import { ArrowIcon, DeleteIcon } from './icons';

import { OptionBase } from '../../types/Option';
import {
  Container,
  Divider,
  Icon,
  InnerContainer,
  Input,
  InputWrrapper,
  ErrorMessage,
  SelectedItem,
  SelectedItemText,
  SelectedItemsContainer,
} from './styles';
import { useOutsideClick } from '../../utils/useOutsideClick';
import Dropdown from '../Dropdown';
import { Space } from '../Space';
import { SelectStyles } from './select.interfaces';

export interface SelectProps extends SelectStyles {
  options: OptionBase[];

  width?: React.ReactText;
  heihgt?: React.ReactText;
  placeholder?: string;
  focusedColor?: string;
  errorColor?: string;
  isMulti?: boolean;
  defaultValue?: OptionBase[];
  customDropdownItem?: React.ReactNode;
  listStyles?: CSSProperties;
}

// TODO: Make component focused when Arrow Icon is clicked
// TODO: Focus input component when arrow icon is clciked
// TODO: Remove options from array when default values is received
// TODO: Add scrollable selected items container for multi select component
// // TODO: Receive default values
// // TODO: Multi Select state management
// // TODO: Add override styles props for each component of select component
// // TODO: Clear select and multi select button
// // TODO: Add remove icon from selected options
// // TODO: Remove selected options from values array

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Select = forwardRef<{ state: OptionBase[] }, SelectProps>(
  (
    {
      options,
      width = 500,
      heihgt = 38,
      placeholder,
      focusedColor = '#2684FF',
      errorColor = '#c91616',
      isMulti = false,
      containerStyles = undefined,
      inputStyles = undefined,
      selectedItemsContainerStyles = undefined,
      selectedItemStyles = undefined,
      defaultValue = [],
      customDropdownItem = null,
      listStyles = undefined,
    },
    ref,
  ) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [focused, setFocused] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const [inputValue, setInputValue] = useState('');
    const [values, setValues] = useState<OptionBase[]>(defaultValue);

    useImperativeHandle(
      ref,
      () => ({
        state: values,
      }),
      [values],
    );

    // * Input focus and dropdown state management
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useOutsideClick(() => {
      if (!dropdownVisible || focused) return;

      setDropdownVisible(false);
    });

    const handleFocus = () => {
      setFocused(true);
      setDropdownVisible(true);

      inputRef.current?.focus();
    };

    const handleBlur = () => {
      setFocused(false);
    };

    const handleToggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
      // setFocused(!focused);
    };

    // * Select State Management
    const handleInputValueChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
      setInputValue(event.target.value);
    };

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ): void => {
      if (event.keyCode === 13) {
        /* Enter key */
        // console.log(inputRef.current?.value);
        const labels = options.map((option) => option.label);

        if (
          inputRef.current?.value &&
          labels.includes(inputRef.current?.value)
        ) {
          const selectedOptions = options.filter(
            (option) => option.label === inputRef.current?.value,
          );

          setErrors([]);
          handleSelectOptions(selectedOptions);
          setFocused(false);
          setDropdownVisible(false);
        } else {
          // console.log('No avaiable option could be found');
          setErrors([`No option ${inputRef.current?.value} found`]);
          setInputValue('');
          setDropdownVisible(false);
        }
      }
    };

    const handleSelectOptions = (selectedOptions: OptionBase[]) => {
      if (!isMulti) {
        setValues([selectedOptions[0]]);
        setErrors([]);
        return;
      }

      setValues([...values, ...selectedOptions]);
      setErrors([]);
    };

    const handleClearSelectionsClick = () => {
      setValues([]);
    };

    const handleSelectedItemDeleteClick = (option: OptionBase) => {
      const newValues = values.filter((value) => value !== option);
      setValues(newValues);
    };

    useEffect(() => {
      setInputValue((): string => {
        if (!isMulti) {
          if (!values[0]) return '';

          return values[0].label;
        }

        return '';
      });
    }, [values, isMulti]);

    return (
      <>
        <Container
          width={width}
          height={heihgt}
          isFocused={focused}
          hasError={errors.length !== 0}
          focusedColor={focusedColor}
          errorColor={errorColor}
          style={containerStyles}
        >
          {isMulti && values.length > 0 ? (
            <SelectedItemsContainer
              style={selectedItemsContainerStyles}
              className="dragscroll"
            >
              {values.map((value, index, arr) => (
                <SelectedItem
                  isLast={index === arr.length - 1}
                  key={value.value}
                  style={selectedItemStyles}
                >
                  <SelectedItemText>{value.label}</SelectedItemText>
                  <DeleteIcon
                    onClick={() => handleSelectedItemDeleteClick(value)}
                    opacity={1}
                    viewBox="0 0 25 25"
                  />
                </SelectedItem>
              ))}
            </SelectedItemsContainer>
          ) : null}
          <InnerContainer>
            <InputWrrapper
              onFocus={handleFocus}
              onBlur={handleBlur}
              tabIndex={0}
            >
              <Input
                ref={inputRef}
                placeholder={values.length > 0 ? '' : placeholder}
                value={inputValue}
                onChange={handleInputValueChange}
                onKeyDown={handleInputKeyDown}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                tabIndex={-1}
                style={inputStyles}
              />
            </InputWrrapper>
            <Icon>
              <DeleteIcon
                onClick={handleClearSelectionsClick}
                opacity={Number(values.length > 0)}
              />
              <Space width={8} height="100%" />
              <Divider />
              <Space width={8} height="100%" />
              <ArrowIcon onClick={handleToggleDropdown} />
            </Icon>
          </InnerContainer>

          <Dropdown
            ref={dropdownRef}
            isVisible={dropdownVisible}
            setIsVisible={setDropdownVisible}
            options={
              isMulti
                ? options.filter((option) => !values.includes(option))
                : options
            }
            width={width}
            containerStyles={{ top: '110%' }}
            listStyles={listStyles}
            selectOptions={handleSelectOptions}
            selectedOption={values[0] || undefined}
            customDropdownItem={customDropdownItem}
          />
        </Container>
        {errors.map((error) => (
          <>
            <Space width="100%" height={5} />
            <ErrorMessage color={errorColor}>{error}</ErrorMessage>
          </>
        ))}
      </>
    );
  },
);

export default Select;

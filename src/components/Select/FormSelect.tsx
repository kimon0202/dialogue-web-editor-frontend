import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import Select, { SelectProps } from '.';

import { SelectWrapperContainer, SelectLabel } from './styles';
import { OptionBase } from '../../types/Option';

interface FormSelectProps extends SelectProps {
  name: string;
  label?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  isMulti,
  options,
  label,
  ...rest
}) => {
  const selectRef = useRef<{ state: OptionBase[] }>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: () => {
        if (isMulti) {
          if (!selectRef.current?.state) return [];

          return selectRef.current.state;
        }

        if (!selectRef.current?.state[0]) return { label: '', value: '' };

        return selectRef.current.state[0];
      },
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <SelectWrapperContainer>
      {label && <SelectLabel htmlFor="select">{label}</SelectLabel>}
      <Select
        ref={selectRef}
        isMulti={isMulti}
        options={options}
        defaultValue={defaultValue}
        {...rest}
      />
    </SelectWrapperContainer>
  );
};

export default FormSelect;

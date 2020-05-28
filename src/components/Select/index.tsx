import './styles.css';

import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import MultiSelect from 'react-multi-select-component';

interface SelectProps {
  name: string;
  options: { label: string; value: string }[];
  label?: string;
}

type Props = JSX.IntrinsicElements['select'] & SelectProps;

const Select: React.FC<Props> = ({
  name,
  multiple,
  options,
  placeholder,
  label,
}) => {
  const [values, setValues] = useState<any[]>([]);
  const selectRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: () => {
        if (!multiple) {
          return values[0];
        }

        return values;
      },
      setValue: (ref, value) => {
        if (!multiple) {
          setValues([value]);
        }
      },
    });
  }, [registerField, fieldName, multiple, values]);

  useEffect(() => {
    if (defaultValue && multiple) {
      setValues(defaultValue);
    }
  }, [defaultValue, multiple]);

  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!multiple) {
      const vals = [];
      vals.push(event.target.value);
      setValues(vals);
    }
  };

  if (!multiple) {
    return (
      <div className="select-group">
        {label && <label htmlFor={fieldName}>{label}</label>}
        <select
          ref={selectRef}
          value={values[0]}
          onChange={handleValueChange}
          className="multi-select single"
          placeholder={placeholder}
          defaultValue={defaultValue}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  return (
    <div className="select-group">
      {label && <label htmlFor={fieldName}>{label}</label>}
      <MultiSelect
        options={options}
        value={values}
        onChange={setValues}
        hasSelectAll={false}
        labelledBy="Select"
      />
    </div>
  );
};

export default Select;

import './styles.css';

import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { InputControl } from './styles';

interface Props {
  name: string;
  label?: string;
  width?: number | string;
  height?: number | string;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextArea: React.FC<TextareaProps> = ({
  name,
  label,
  width = 400,
  height = 400,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      path: 'value',

      ref: textareaRef.current,
    });
  }, [fieldName, registerField]);

  const handleBlur = () => {
    if (textareaRef.current?.value !== '') {
      labelRef.current?.classList.add('active');
    } else {
      labelRef.current?.classList.remove('active');
    }
  };

  return (
    <InputControl onBlur={handleBlur}>
      <textarea
        id={fieldName}
        ref={textareaRef}
        defaultValue={defaultValue}
        className="input-control"
        style={{
          width,
          height,
        }}
        autoCorrect="off"
        autoComplete="off"
        onBlur={handleBlur}
        {...rest}
      />
      {label ? (
        <label className="label" htmlFor={fieldName} ref={labelRef}>
          {label}
        </label>
      ) : null}
      {error ? <span>{error}</span> : null}
    </InputControl>
  );
};

export default TextArea;

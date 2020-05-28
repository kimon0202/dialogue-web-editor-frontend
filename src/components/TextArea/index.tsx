import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

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

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      path: 'value',

      ref: textareaRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {label ? <label htmlFor={fieldName}>{label}</label> : null}

      <textarea
        id={fieldName}
        ref={textareaRef}
        defaultValue={defaultValue}
        style={{
          width,
          height,
          fontSize: 18,
          padding: 10,
          resize: 'none',
          outline: 'none',
        }}
        autoCorrect="off"
        autoComplete="off"
        {...rest}
      />

      {error ? <span>{error}</span> : null}
    </div>
  );
};

export default TextArea;

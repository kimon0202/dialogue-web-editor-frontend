import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface Props {
  name: string;
  label?: string;
  width?: number;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextArea: React.FC<TextareaProps> = ({ name, label, width, ...rest }) => {
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
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea
        id={fieldName}
        ref={textareaRef}
        defaultValue={defaultValue}
        style={{
          width: width || 400,
          height: 400,
          background: '#e4e4e4',
          fontSize: 18,
          padding: 20,
          resize: 'none',
        }}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  );
};

export default TextArea;

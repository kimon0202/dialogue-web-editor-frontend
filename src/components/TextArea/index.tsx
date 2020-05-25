import { useField } from '@unform/core';
import { lighten } from 'polished';
import React, { useEffect, useRef } from 'react';

import { dark } from '../../styles/themes/dark';

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
      {label ? <label htmlFor={fieldName}>{label}</label> : null}

      <textarea
        id={fieldName}
        ref={textareaRef}
        defaultValue={defaultValue}
        style={{
          width: width || 400,
          height: 400,
          background: lighten(0.45, dark.colors.backgroundSecondary),
          fontSize: 18,
          padding: 10,
          resize: 'none',
          outline: 'none',
        }}
        autoCorrect="none"
        autoComplete="none"
        {...rest}
      />

      {error ? <span>{error}</span> : null}
    </div>
  );
};

export default TextArea;

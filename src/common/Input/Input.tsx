import { InputHTMLAttributes } from 'react';

import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = (props: InputProps): JSX.Element => {
  const { label, className = '', ...inputProps } = props;

  return (
    <div className={`input-container ${className}`.trim()}>
      {label && <label htmlFor={inputProps.id}>{label}</label>}

      <input {...inputProps} />
    </div>
  );
};

export default Input;

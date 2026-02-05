import { ButtonHTMLAttributes } from 'react';

import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { buttonText, className = '', type = 'button', ...buttonProps } = props;

  return (
    <button type={type} className={`button ${className}`.trim()} {...buttonProps}>
      {buttonText}
    </button>
  );
};

export default Button;

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
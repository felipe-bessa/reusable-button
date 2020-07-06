// components/Button/Button.js

import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ variant, disabled, color, size, className, children, ...props}) => {
  const sizeClass = size === undefined ? '' : ` button-${size}`;
  console.log(sizeClass);
  return(
    <div>
      <button className={`button${sizeClass}${className === undefined ? '' : ' ' + className}`} 
              color={color === undefined ? 'default' : color} 
              size={size === undefined ? 'md' : size} disabled={disabled}>
        { children }
      </button>
    </div>
  );
}

Button.defaultProps = {
  children: 'Default'
}

Button.propsTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}


export default Button;
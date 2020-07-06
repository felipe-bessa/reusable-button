// components/Button/Button.js

import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ variant, disabled, color, className, children, ...props}) => {
  console.log(className);
  return(
    <div>
      <button className={`button${className === undefined ? '' : ' ' + className}`} 
              color={color === undefined ? 'default' : color} disabled={disabled}>
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
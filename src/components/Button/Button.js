// components/Button/Button.js

import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ variant, disabled, color, size, disableShadow, className, children, ...props}) => {
  const sizeClass = size === undefined ? '' : ` button-${size}`;
  const disableShadowClass = disableShadow ? ' disable-shadow' : '';
  
  return(
    <div>
      <button id={props.id}
              className={`button${sizeClass}${disableShadowClass}${className === undefined ? '' : ' ' + className}`} 
              color={color === undefined ? 'default' : color}
              size={size === undefined ? 'md' : size} 
              disabled={disabled}
              accessKey={props.accessKey}
              autoFocus={props.autoFocus}
              contentEditable={props.contentEditable}
              dir={props.dir}
              draggable={props.draggable}
              form={props.form}
              formAction={props.formAction}
              formEncType={props.formEncType}
              formMethod={props.formMethod}
              formNoValidate={props.formNoValidate}
              formTarget={props.formTarget}
              hidden={props.hidden}
              lang={props.lang}
              name={props.name}
              spellCheck={props.spellCheck}
              style={props.style}
              tabIndex={props.tabIndex}
              title={props.title}
              translate={props.translate}
              type={props.type}
              value={props.value}>
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
import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const { inputGroupClass, label, type, name, value, placeholder, className, onChange } = props;
  return (
    <div className={inputGroupClass}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  className: 'form-control',
  placeholder: 'Enter Value',
  inputGroupClass: 'form-group col-md-6',
  onChange: () => { }
}

Input.prototype = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.placeholder,
  value: PropTypes.any,
}
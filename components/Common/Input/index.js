import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextFieldGroup = ({
                          name, label, value, placeholder, error, type, disabled, onChange, onKeyUp, onMouseDown, onBlur,
                        }) => (
  <div className='input__container'>
    <p className='label'>{label}</p>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      error={error}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onBlur={onBlur}
      disabled={disabled}
    />
    {error && <span className='err-message'>{error}</span>}
  </div>
);

TextFieldGroup.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  disabled: false,
};

export default TextFieldGroup;

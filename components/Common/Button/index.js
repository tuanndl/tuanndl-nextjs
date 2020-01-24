import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
                         style, className, name, content, value, disabled, onClick
                        }) => (
  <button
    style={style}
    className={className}
    name={name}
    value={value}
    onClick={onClick}
    disabled={disabled}
  >
    {content}
  </button>
);

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  disabled: false,
};

export default Button;

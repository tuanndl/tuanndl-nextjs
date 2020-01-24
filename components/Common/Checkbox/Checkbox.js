import React from 'react';
import PropTypes from 'prop-types';
import styleCheckbox from './Checkbox.module.scss';

const Checkbox = ({
                 name, label, value, error, disabled, onChange, checked
               }) => (
  <div className={ styleCheckbox.main }>
    <label>
      {label}
      <input
        type="checkbox"
        name={name}
        value={value}
        error={error}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <span className={styleCheckbox.checkmark}></span>
    </label>
    { error && <span className={ styleCheckbox.err_message }>{ error }</span> }
  </div>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
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
  type: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  label: '',
  error: '',
  disabled: false,
  checked: false
};

export default Checkbox;

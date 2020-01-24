import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
                   name, label, value, error, disabled, onChange, style, className, data, keyValue, keyContent, firstChoose
               }) => (
    <div className={ 'select__main' }>
        <p className={ 'select__main--label' }>{ label }</p>
        <select
            className={className}
            name={name}
            value={value}
            error={error}
            onChange={onChange}
            disabled={disabled}
            style={style}
        >
            {firstChoose && <option disabled value='-1' >{firstChoose}</option>}
            {data.map((item, index) => {
                return (
                <option key={index} value={item[keyValue]}>{item[keyContent]}</option>
                );
            })}
        </select>
        { error && <span className={ 'err_message' }>{ error }</span> }
    </div>
);

Select.propTypes = {
    name: PropTypes.string,
    keyValue: PropTypes.string.isRequired,
    keyContent: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
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
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
    label: '',
    error: '',
    disabled: false,
    style: {},
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

const ButtonLoading = ({
                         fontSize, marginTop, marginBottom, marginLeft, marginRight, width,
                       }) => (
  <span><i style={{
    fontSize,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
  }} className="fa fa-spinner fa-spin" aria-hidden="true"> </i></span>
);

ButtonLoading.propTypes = {
  fontSize: PropTypes.number.isRequired,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

ButtonLoading.defaultProps = {
  fontSize: 25,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

export default ButtonLoading;

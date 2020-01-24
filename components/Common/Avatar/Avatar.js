import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

class Avatar extends Component {
  render() {
    const { url, status, size, rankVip, sizeVip, styleRankVip } = this.props;
    let style = {
      height: sizeVip,
      width: sizeVip,
    };

    if (styleRankVip === 'small') {
      style.top = -5;
      style.left = -2;
    }

    if (!url) {
      return null;
    }

    return (
      <div className={`avt avt-${size}`}>
        <img
          className={`avt-${size}`}
          alt='avatar'
          src={url}
        />

        { status
          ? <div className={`stt stt-${status}`} />
          : ''
        }

        { rankVip && <img
          style={style}
          className='vip-avatar'
          src={rankVip}
          alt='rankvip playerduo'
        /> }
      </div>
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string,
  status: PropTypes.string,
  size: PropTypes.string,
  rankVip: PropTypes.string,
  styleRankVip: PropTypes.string,
};

Avatar.defaultProps = {
  url: 'https://herringtondarkholme.github.io/images/avatar.gif',
  status: null,
  size: 'md',
  rankVip: null,
  styleRankVip: 'larges',
};

export default Avatar;

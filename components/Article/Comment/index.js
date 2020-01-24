import React from 'react';
import {CommonHelper} from '../../../utils';

import './index.scss';

const Comment = props => {
  return (
    <li className='comment__item--li'>
      <div className='comment__item--avatar'>
        <img
          src={props.user && props.user.avatar}
          alt='avatar of user'
        />
      </div>
      <div className='comment__item--content'>
        <span className='comment__item--name'>{props.user && props.user.name}</span>
        <span className='comment__item--time'>
          {' '}lúc<span>{' '}{CommonHelper.dateString(props.createdAt, true)}</span>
        </span>
        <br />
        {props.content}
      </div>
    </li>
  );
};

export default Comment;
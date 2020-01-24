import React, {useState} from 'react';
import Button from '../../../components/Common/Button';
import './index.scss';

const CreateComment = props => {

  const [content, setContent] = useState('');

  const onChange = (e) => {
    const {value} = e.target;
    setContent(value);
  };

  const createComment = () => {
    props.createCommentRequest(props.idArticle, {content: content.trim()});
    setContent('');
  };

  return (
    <li className='comment__item--li'>
      <div className='comment__item--avatar'>
        <img
          src={props.dataAuth && props.dataAuth.avatar}
          alt='avatar of user'
        />
      </div>
      <div className='comment__item--content'>
        <textarea
          className='comment__item--textarea'
          name='content'
          value={content}
          onChange={onChange}
        />
        <Button
          style={{marginLeft: 0, marginTop: 0}}
          onClick={createComment}
          content='Bình luận'
          className='btn-danger'
        />
      </div>
    </li>
  );
};

export default CreateComment;
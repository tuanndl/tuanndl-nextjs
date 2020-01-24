import React, { useState, useContext, Fragment } from 'react';
import { ArticleContext } from '../../../context';
import Button from '../../Common/Button';
import Select from '../../Common/Select';
import Input from '../../Common/Input';
import { CommonHelper } from '../../../utils';
import Content from "../../../views/Article/Components/Content";
import './index.scss';

const CreateArticle = () => {

  const state = {
    category: '-1',
    content: '',
    title: '',
    imageArticle: '',
  };
  const [todoState, setTodoState] = useState(state);

  const context = useContext(ArticleContext);

  const onChange = (e) => {
    const { value, name } = e.target;
    setTodoState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValid = () => {
    if (todoState.category === '-1' || todoState.content.length === 0 || todoState.title.length === 0) {
      return false;
    }
    return true;
  };

  const createArticle = () => {
    if (isValid) {
      const postData ={ ...todoState };
      postData.link = CommonHelper.change_alias(postData.title).split(' ').join('_');
      context.createArticleRequest(postData);
    }
  };

  return (
    <Fragment>
      <Select
        label='Danh mục'
        data={context.category}
        keyValue={'_id'}
        keyContent={'name'}
        firstChoose={'Chọn Danh mục'}
        name='category'
        onChange={onChange}
        value={todoState.category}
      />

      <Input
        value={todoState.title}
        label={'Tên bài viết'}
        onChange={onChange}
        name={'title'}
      />
      <Input
        value={todoState.imageArticle}
        label={'Ảnh bài viết'}
        onChange={onChange}
        name={'imageArticle'}
      />

      <textarea
        className='article__create--textarea'
        name='content'
        onChange={onChange}
        value={todoState.content}
      />

      <Content content={todoState.content} />

      <Button onClick={createArticle} content='Tạo' />
    </Fragment>
  );
};

export default CreateArticle;
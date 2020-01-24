import React from 'react'
import fetch from 'isomorphic-unfetch';
import _get from 'lodash/get';
import Layout from '../../components/layout';
import Content from '../../components/Article/Content';
import Comments from '../../components/Article/Comments';
import { CommonHelper } from '../../utils';

import './article.scss';

const Post = ({ dataPost: { title, content, createdAt, _id, category}, dataComment }) => {
  return(
    <Layout>
      <h1 className='container__main--title'>
        <span>
          # {title}
        </span>
      </h1>

      <div className='Article__item'>
        <span className='Article__item--time'>{CommonHelper.dateString(createdAt)}</span>
        <span className='Article__item--tag'>{category && category.name}</span>
      </div>

      <Content content={content} />

      {/*<Comments*/}
      {/*  idArticle={_id}*/}
      {/*  comment={dataComment}*/}
      {/*  dataAuth={props.dataAuth}*/}
      {/*  isLoadingAuth={props.isLoadingAuth}*/}
      {/*  createCommentRequest={props.createCommentRequest}*/}
      {/*  loginByFacebookRequest={props.loginByFacebookRequest}*/}
      {/*/>*/}
    </Layout>
  );
};

Post.getInitialProps = async function(ctx) {
  const callApi = [
    fetch('https://gateway.tuanndl.com/api/v1/article/' + ctx.query.id),
    fetch('https://gateway.tuanndl.com/api/v1/comment/' + ctx.query.id)
  ];

  let responses = await Promise.all(callApi);
  const dataPost = await responses[0].json();
  const dataComment = await responses[1].json();

  return {
    dataPost: _get(dataPost, 'result',''),
    dataComment: _get(dataComment, 'result,data',[]),
  }
};

export default Post;
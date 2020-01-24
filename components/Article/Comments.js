import React from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';
import FacebookLogin from './FacebookLogin';
import Spinner from 'react-spinkit';

const Comments = props => {

  const elmComments = comment => {
    let result = null;
    if (comment && comment.length > 0) {
      result = comment.map(item => {
        return (
          <Comment
            key={item._id}
            user={item.user}
            content={item.content}
            createdAt={item.createdAt}
          />
        );
      });
    }
    return result;
  };

  const createComment = () => {
    if (props.dataAuth._id){
      return <CreateComment
      idArticle={props.idArticle}
      dataAuth={props.dataAuth}
      createCommentRequest={props.createCommentRequest}
    /> }

    return <FacebookLogin
      loginByFacebookRequest={props.loginByFacebookRequest}
    />;
  };

  return (
    <React.Fragment>
      <h1>
        <span>Bình luận</span>
      </h1>

      <ul>
        {elmComments(props.comment)}

        { props.isLoadingAuth && <Spinner name='ball-spin-fade-loader'/> }

        { !props.isLoadingAuth && createComment()}
      </ul>
    </React.Fragment>
  );
};

export default Comments;
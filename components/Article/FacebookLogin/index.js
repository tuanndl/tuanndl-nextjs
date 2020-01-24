import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {client} from '../../../config/credentials';
import Button from '../../../components/Common/Button';
import './index.scss';

const LoginFB = props => {

  const responseFacebook = (response) => {
    if (response.userID) {
      props.loginByFacebookRequest({
        socialId: response.userID || response.id,
        avatar: response.picture.data.url,
        name: response.name,
        accessToken: response.accessToken
      });
    }
  };

  return (
    <FacebookLogin
      appId={client.client_id}
      callback={responseFacebook}
      fields='name,email,picture'
      disableMobileRedirect={true}
      isMobile={true}
      render={renderProps => (
        <Button onClick={renderProps.onClick} content='Đăng nhập để bình luận' className='btn-success' />
      )}
    />
  );
};

export default LoginFB;

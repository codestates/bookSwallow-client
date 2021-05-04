import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';
import SocialAuth from '../../components/auth/SocialAuth';
import { loginReq, resetLogin } from '../../modules/auth';
import { loginUser } from '../../modules/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import SocialContainer from './SocialContainer';

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
`;

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { login, loginError, isLogin, token } = useSelector(
    ({ auth, user }) => ({
      login: auth.login,
      loginError: auth.loginError,
      isLogin: user.isLogin,
      token: user.token,
    }),
  );

  const [errorMsg, setErrorMsg] = useState('');

  const onSubmitHand = (data) => {
    if (data.email && data.password) {
      const { email, password } = data;
      dispatch(loginReq({ email, password }));
    } else {
      return;
    }
  };

  useEffect(() => {
    if (loginError) {
      console.log('에러 발생');
      console.log(loginError);
      setErrorMsg(loginError);
      return;
    }
    if (login) {
      setErrorMsg('');
      console.log('로그인 성공');
      console.log(login);
      const payload = {
        token: login.data.accessToken,
        id: login.data.payload.id,
        email: login.data.payload.email,
        username: login.data.payload.username,
      };
      dispatch(loginUser(payload));
    }
  }, [login, loginError, dispatch]);

  useEffect(() => {
    if (isLogin) {
      dispatch(resetLogin());
      history.push('/');
    }
  }, [isLogin]);

  return (
    <>
      <AuthForm type="login" onSubmitHand={onSubmitHand}></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
      <SocialContainer />
    </>
  );
};

export default withRouter(LoginForm);

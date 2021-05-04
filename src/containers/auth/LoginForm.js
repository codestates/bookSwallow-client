import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';
import SocialAuth from '../../components/auth/SocialAuth';
import { loginReq, resetLogin, userInfoReq } from '../../modules/auth';
import { loginUser } from '../../modules/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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
      dispatch(loginUser(login.data.accessToken));
      dispatch(resetLogin());
      history.push('/');
    }
  }, [login, loginError, dispatch]);

  return (
    <>
      <AuthForm type="login" onSubmitHand={onSubmitHand}></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
      <SocialAuth />
    </>
  );
};

export default withRouter(LoginForm);

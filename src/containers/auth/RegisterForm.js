import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthFrom';
import { useSelector, useDispatch } from 'react-redux';
import { registerReq, resetRegister } from '../../modules/auth';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
`;

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const { register, registerError } = useSelector(({ auth }) => ({
    register: auth.register,
    registerError: auth.registerError,
  }));
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmitHand = (data) => {
    if (
      data.email.length > 0 &&
      data.password.length > 0 &&
      data.username.length > 0 &&
      data.PW_confirm.length > 0 &&
      data.formErrors.email.length === 0 &&
      data.formErrors.password.length === 0 &&
      data.formErrors.username.length === 0 &&
      data.formErrors.PW_confirm.length === 0
    ) {
      const { email, username, password } = data;
      dispatch(registerReq({ email, username, password }));
    } else {
      return;
    }
  };

  useEffect(() => {
    if (registerError) {
      if (registerError === 'already exists') {
        setErrorMsg(
          '이미 가입된 이메일 주소입니다. 다른 이메일을 입력하여 주세요.',
        );
      }
      return;
    }
    if (register) {
      setErrorMsg('');
      console.log(register);
      dispatch(resetRegister());
      alert('회원가입 성공');
      history.push('/login');
    }
  }, [register, registerError, errorMsg, history, dispatch]);

  useEffect(() => {
    setErrorMsg('');
  }, []);

  return (
    <>
      <AuthForm type="register" onSubmitHand={onSubmitHand}></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
    </>
  );
};

export default withRouter(RegisterForm);

import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthFrom';
import { useSelector, useDispatch } from 'react-redux';
import { registerReq, resetRegister } from '../../modules/auth';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Modal from '../../components/common/Modal';
import { showModal, closeModal } from '../../modules/modal';

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
`;

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const { register, registerError, checkModal } = useSelector(
    ({ auth, modal }) => ({
      register: auth.register,
      registerError: auth.registerError,
      checkModal: modal.checkModal,
    }),
  );
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
      // console.log('오류 발생');
      // console.log(registerError);
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
      dispatch(showModal());
    }
  }, [register, registerError, errorMsg, history, dispatch]);

  const onConfirm = () => {
    dispatch(closeModal());
    history.push('/login');
  };

  useEffect(() => {
    return () => {
      dispatch(resetRegister());
      setErrorMsg('');
    };
  }, []);

  return (
    <>
      <AuthForm type="register" onSubmitHand={onSubmitHand}></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
      <Modal
        visible={checkModal}
        content="회원가입 성공"
        onCancel={onConfirm}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default withRouter(RegisterForm);

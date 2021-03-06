import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';
import {
  updateReq,
  resetUpdate,
  resetInfo,
  userInfoReq,
} from '../../modules/auth';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { loginUser, withdrawal } from '../../modules/user';
import Modal from '../../components/common/Modal';
import { showModal, closeModal } from '../../modules/modal';

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
`;

const WithdrawBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  button {
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
`;

const UpdateForm = ({ history }) => {
  const dispatch = useDispatch();

  const {
    update,
    updateError,
    token,
    username,
    email,
    info,
    checkModal,
  } = useSelector(({ auth, user, modal }) => ({
    update: auth.update,
    updateError: auth.updateError,
    info: auth.info,
    username: user.username,
    email: user.email,
    token: user.token,
    checkModal: modal.checkModal,
  }));

  const [errorMsg, setErrorMsg] = useState('');
  const [socialType, setSocialType] = useState('');

  const onSubmitHand = (data) => {
    if (
      data.formErrors.email.length === 0 &&
      data.formErrors.password.length === 0 &&
      data.formErrors.username.length === 0 &&
      data.formErrors.PW_confirm.length === 0
    ) {
      const { password, username } = data;
      dispatch(updateReq({ password, username }));
    } else {
      return;
    }
  };

  useEffect(() => {
    if (updateError) {
      return;
    }
    if (update) {
      setErrorMsg('');
      const payload = {
        token: update.data.accessToken,
        id: update.data.payload.id,
        email: update.data.payload.email,
        username: update.data.payload.username,
      };
      dispatch(loginUser(payload));
      dispatch(resetUpdate());
      history.push('/');
    }
  }, [update, updateError, errorMsg, history, dispatch]);

  let currentUser = username;
  const currentEmail = email;

  useEffect(() => {
    dispatch(userInfoReq());
  }, [dispatch]);

  useEffect(() => {
    if (info) {
      setSocialType(info.social_type);
    }
  }, [info]);

  const onCancel = () => {
    dispatch(closeModal());
  };
  const onWithdrawal = () => {
    dispatch(withdrawal(token));
    dispatch(resetInfo());
    history.push('/');
  };
  const withdrawalBtn = () => {
    dispatch(showModal());
  };

  return (
    <>
      <AuthForm
        type="mypage"
        currentUser={currentUser}
        currentEmail={currentEmail}
        onSubmitHand={onSubmitHand}
        socialLeng={socialType.length}
      ></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
      <Container>
        <WithdrawBtn>
          <button onClick={() => withdrawalBtn()}>????????????</button>
        </WithdrawBtn>
      </Container>
      <Modal
        visible={checkModal}
        content="?????????????????????????"
        onCancel={onCancel}
        onConfirm={onWithdrawal}
      />
    </>
  );
};

export default withRouter(UpdateForm);

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';
import { updateReq, resetUpdate, userInfoReq } from '../../modules/auth';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../modules/user';

const ErrorText = styled.div`
  margin-top: 10px;
  color: red;
`;

const UpdateForm = ({ history }) => {
  const dispatch = useDispatch();

  const { update, updateError, info, infoError } = useSelector(({ auth }) => ({
    update: auth.update,
    updateError: auth.updateError,
    info: auth.info,
    infoError: auth.infoError,
  }));

  const [updateInp, setupdateInp] = useState({ username: '', email: '' });
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
      console.log('update 완료', update);
      dispatch(loginUser(update.data.accessToken));
      alert(update.message);
      dispatch(resetUpdate());
      history.push('/');
    }
  }, [update, updateError, errorMsg, history, dispatch]);

  // useEffect(() => {
  //   dispatch(userInfoReq());
  //   setupdateInp({ username: info.username, email: info.email });
  // }, []);

  console.log('이거뜸?', updateInp);

  return (
    <>
      <AuthForm
        type="mypage"
        onSubmitHand={onSubmitHand}
        updateInp={updateInp}
      ></AuthForm>
      <ErrorText>{errorMsg}</ErrorText>
    </>
  );
};

export default withRouter(UpdateForm);

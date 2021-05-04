import React, { useEffect } from 'react';
import Headers from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../modules/user';
import Modal from '../../components/common/Modal';
import { showModal, closeModal } from '../../modules/modal';
import { withRouter } from 'react-router-dom';

function HeaderContainer({ history }) {
  const { checkModal } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(showModal());
  };
  const onCancel = () => {
    dispatch(closeModal());
  };
  const onLogoutClick = () => {
    dispatch(logoutUser());
    dispatch(closeModal());
    history.push('/');
  };

  useEffect(() => {
    //  dispatch();
  }, [dispatch]);
  return (
    <>
      <Headers onLogout={onLogout} />
      <Modal
        visible={checkModal}
        content="로그아웃 하시겠습니까?"
        onCancel={onCancel}
        onConfirm={onLogoutClick}
      />
    </>
  );
}

export default withRouter(HeaderContainer);

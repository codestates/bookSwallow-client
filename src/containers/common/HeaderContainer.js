import React, { useEffect } from 'react';
import Headers from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../modules/user';
import { withRouter } from 'react-router-dom';

function HeaderContainer({ history }) {
  const { checkModal } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <>
      <Headers onLogout={onLogout} />
    </>
  );
}

export default withRouter(HeaderContainer);

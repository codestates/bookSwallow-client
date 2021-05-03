import React, { useEffect } from 'react';
import Headers from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../modules/user';

function HeaderContainer() {
  //useSelector();
  const dispatch = useDispatch();
  const onLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      dispatch(logoutUser());
    }
  };

  useEffect(() => {
    //  dispatch();
  }, [dispatch]);
  return <Headers onLogout={onLogout} />;
}

export default HeaderContainer;

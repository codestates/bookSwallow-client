import React, { useEffect } from 'react';
import Headers from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';

function HeaderContainer() {
  //useSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    //  dispatch();
  }, [dispatch]);
  return <Headers />;
}

export default HeaderContainer;

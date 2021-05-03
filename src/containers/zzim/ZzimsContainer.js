import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getZzims } from '../../modules/zzims';
import ZzimList from '../../components/zzim/ZzimList';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function ZzimsContainer() {
  // const { data, loading, error } = useSelector((state) => state.zzims.zzims);
  // const zzimsDispatch = useDispatch();

  // useEffect(() => {
  //   zzimsDispatch(getZzims());
  // }, [zzimsDispatch]);

  // if (loading) return <Loading />;
  // if (error) return <Errors error={error} />;
  // if (!data) return <Empty />;

  // zzims={data.data}
  return <ZzimList />;
}

export default ZzimsContainer;

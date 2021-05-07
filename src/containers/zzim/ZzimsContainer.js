import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getZzims, deleteZzim } from '../../modules/zzims';
import ZzimList from '../../components/zzim/ZzimList';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';
import Modal from '../../components/common/Modal';
import { showModal, closeModal } from '../../modules/modal';

function ZzimsContainer() {
  const [zzimId, setZzimId] = useState(null);
  const dispatch = useDispatch();
  const { data, loading, error, checkModal, delData, delError } = useSelector(
    ({ zzims, modal }) => ({
      data: zzims.zzims.data,
      loading: zzims.zzims.loading,
      error: zzims.zzims.error,
      checkModal: modal.checkModal,
      delData: zzims.delete.delData,
      delLoading: zzims.delete.delLoading,
      delError: zzims.delete.delError,
    }),
  );

  useEffect(() => {
    dispatch(getZzims());
  }, [dispatch]);

  const onDelete = (zzim_id) => {
    dispatch(showModal());
    setZzimId(zzim_id);
  };
  const onCancel = () => {
    dispatch(closeModal());
  };
  const onDeleteClick = async () => {
    await dispatch(deleteZzim(zzimId));
    await dispatch(closeModal());
  };

  useEffect(() => {
    if (delError) {
      console.log('에러 발생');
      console.log(delError);
    }
    if (delData) {
      dispatch(getZzims());
    }
  }, [delData, delError, dispatch]);

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;

  return (
    <>
      {data.data.length === 0 ? (
        <div>찜한 도서가 없습니다.</div>
      ) : (
        <ZzimList zzims={data.data} deleteHandler={onDelete} />
      )}
      <Modal
        visible={checkModal}
        content="삭제하시겠습니까?"
        onCancel={onCancel}
        onConfirm={onDeleteClick}
      />
    </>
  );
}

export default ZzimsContainer;

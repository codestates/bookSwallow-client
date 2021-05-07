import React, { useState, useEffect } from 'react';
import BookDetail from '../../components/book/BookDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../../modules/books';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';
import { createZzim, resetCreate } from '../../modules/zzims';
import Modal from '../../components/common/Modal';
import { showModal, closeModal } from '../../modules/modal';

function BookContainer({ id }) {
  const [modalMsg, setModalMsg] = useState('');
  const { data, loading, error, creData, creError, checkModal } = useSelector(
    ({ books, zzims, modal }) => ({
      data: books.book.data,
      loading: books.book.loading,
      error: books.data,
      creData: zzims.create.creData,
      creError: zzims.create.creError,
      checkModal: modal.checkModal,
    }),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  const selectZzim = (book_id) => {
    dispatch(createZzim(book_id));
  };
  useEffect(() => {
    if (creError) {
      console.log('에러 발생');
      console.log(creError);
    }
    if (creData) {
      setModalMsg(creData.message + '.');
      dispatch(showModal());
    }
    return () => {
      dispatch(resetCreate());
    };
  }, [creData, creError, dispatch]);
  const onCancel = () => {
    dispatch(closeModal());
  };
  const onConfirm = () => {
    dispatch(closeModal());
  };

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;

  return (
    <>
      <BookDetail book={data.data} onSelect={selectZzim} />
      <Modal
        visible={checkModal}
        content={modalMsg}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  );
}

export default BookContainer;

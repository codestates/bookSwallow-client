import React, { useEffect } from 'react';
import BookDetail from '../../components/book/BookDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../../modules/books';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function BookContainer({ id }) {
  const { data, loading, error } = useSelector((state) => state.books.book);

  const bookDispatch = useDispatch();
  useEffect(() => {
    bookDispatch(getBook(id));
  }, [bookDispatch]);

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;

  return <BookDetail id={id} book={data.data} />;
}

export default BookContainer;

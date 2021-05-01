import React, { useEffect } from 'react';
import BookDetail from '../../components/book/BookDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../../modules/books';

function BookContainer({ id }) {
  const { data, loading, error } = useSelector((state) => state.books.book);

  const bookDispatch = useDispatch();
  useEffect(() => {
    bookDispatch(getBook(id));
  }, [bookDispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <BookDetail id={id} book={data.data} />;
}

export default BookContainer;

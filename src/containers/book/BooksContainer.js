import React, { useEffect } from 'react';
import BookList from '../../components/book/BookList';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../modules/books';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function BooksContainer() {
  const { data, loading, error } = useSelector((state) => state.books.books);
  const booksDispatch = useDispatch();

  useEffect(() => {
    booksDispatch(getBooks());
  }, []);

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;

  return <BookList books={data.data} />;
}

export default React.memo(BooksContainer);

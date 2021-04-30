import React, { useEffect } from 'react';
import BookList from '../../components/book/BookList';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../modules/books';

function BooksContainer() {
  const { data, loading, error } = useSelector((state) => state.books.books);
  const booksDispatch = useDispatch();

  useEffect(() => {
    booksDispatch(getBooks());
  }, [booksDispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <BookList books={data.data} />;
}

export default BooksContainer;

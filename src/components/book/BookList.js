import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
}

export default BookList;

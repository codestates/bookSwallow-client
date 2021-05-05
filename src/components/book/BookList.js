import React from 'react';
import BookItem from './BookItem';
import styled from 'styled-components';

function BookList({ books }) {
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} like={book.like_count} />
      ))}
    </>
  );
}

export default React.memo(BookList);

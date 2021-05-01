import React from 'react';
import BookItem from './BookItem';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 6rem;
`;

function BookList({ books }) {
  return (
    <>
      <Spacer />
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
}

export default BookList;

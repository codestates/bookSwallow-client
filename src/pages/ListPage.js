import React from 'react';
import styled from 'styled-components';
import BookSlide from '../components/book/BookSlide';
import BooksContainer from '../containers/book/BooksContainer';

const Spacer = styled.div`
  height: 6rem;
`;
function ListPage() {
  return (
    <>
      <BookSlide></BookSlide>
      <Spacer />
      <BooksContainer></BooksContainer>
    </>
  );
}

export default ListPage;

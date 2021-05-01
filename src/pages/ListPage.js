import React from 'react';
import styled from 'styled-components';
import BookList from '../components/book/BookList';
import BookSlide from '../components/book/BookSlide';
import BooksContainer from '../containers/book/BooksContainer';

const Container = styled.div``;

function ListPage() {
  return (
    <>
      <BookSlide></BookSlide>
      <BooksContainer></BooksContainer>
    </>
  );
}

export default ListPage;

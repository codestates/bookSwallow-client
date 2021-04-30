import React from 'react';
import styled from 'styled-components';
import BookList from '../components/book/BookList';
import BookSlide from '../components/book/BookSlide';

const Container = styled.div``;

function ListPage() {
  return (
    <>
      <BookSlide></BookSlide>
      <BookList></BookList>
    </>
  );
}

export default ListPage;

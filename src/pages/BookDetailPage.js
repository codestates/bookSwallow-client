import React from 'react';
import styled from 'styled-components';
import BookDetail from '../components/book/BookDetail';
import CommentInput from '../components/comment/CommentInput';
import CommentItem from '../components/comment/CommentItem';

const Spacer = styled.div`
  height: 3rem;
`;

function BookDetailPage({ match }) {
  const { params } = match;
  return (
    <>
      <Spacer />
      <BookDetail id={params.id} />
      <Spacer />
      <CommentInput />
      <Spacer />
      <CommentItem />
    </>
  );
}

export default BookDetailPage;

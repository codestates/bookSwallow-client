import React from 'react';
import styled from 'styled-components';
import CommentInput from '../components/comment/CommentInput';
import CommentItem from '../components/comment/CommentItem';
import BookContainer from '../containers/book/BookContainer';

const Spacer = styled.div`
  height: 3rem;
`;

function BookDetailPage({ match }) {
  const { params } = match;
  return (
    <>
      <Spacer />
      <BookContainer id={params.id} />
      <Spacer />
      <CommentInput />
      <Spacer />
      <CommentItem />
    </>
  );
}

export default BookDetailPage;

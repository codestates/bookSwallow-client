import React from 'react';
import styled from 'styled-components';
import BookContainer from '../containers/book/BookContainer';
import CommentInputContainer from '../containers/comment/CommentInputContainer';
import CommentsContainer from '../containers/comment/CommentsContainer';

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
      <CommentInputContainer />
      <Spacer />
      <CommentsContainer bookId={params.id} />
      <Spacer />
      <Spacer />
      <Spacer />
    </>
  );
}

export default BookDetailPage;

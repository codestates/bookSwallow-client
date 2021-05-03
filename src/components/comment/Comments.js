import React from 'react';
import CommentItem from './CommentItem';

const data = [
  {
    contentId: 1,
    bookId: 1,
    userId: 1,
    username: '조태규',
    createdAt: '3일전',
    content: '클린코드 책 좋은가요?',
  },
];

function Comments() {
  return (
    <>
      <CommentItem />
    </>
  );
}

export default Comments;

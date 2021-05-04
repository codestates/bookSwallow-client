import React from 'react';
import CommentItem from './CommentItem';

function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default Comments;

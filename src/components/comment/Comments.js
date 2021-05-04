import React from 'react';
import CommentItem from './CommentItem';

function Comments({ comments, isUpdate, updateComment, deleteComment }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isUpdate={isUpdate}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      ))}
    </>
  );
}

export default Comments;

import React from 'react';
import CommentItem from './CommentItem';

function Comments({
  comments,
  isUpdate,
  userId,
  updateText,
  updateOnChange,
  updateStateComment,
  deleteComment,
  updateCommentHandler,
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isUpdate={isUpdate}
          userId={userId}
          updateText={updateText}
          updateStateComment={updateStateComment}
          updateOnChange={updateOnChange}
          deleteComment={deleteComment}
          updateCommentHandler={updateCommentHandler}
        />
      ))}
    </>
  );
}

export default Comments;

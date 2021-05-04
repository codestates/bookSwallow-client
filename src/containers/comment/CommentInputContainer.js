import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CommentInput from '../../components/comment/CommentInput';
import { createComment } from '../../modules/comments';

function CommentInputContainer({ bookId }) {
  const [comment, setComment] = useState('');
  const { data } = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createComment(bookId, comment));
    setComment('');
  };
  const onChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <CommentInput comment={comment} onChange={onChange} onSubmit={onSubmit} />
  );
}

export default CommentInputContainer;

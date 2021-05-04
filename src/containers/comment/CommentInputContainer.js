import React, { useState } from 'react';
import CommentInput from '../../components/comment/CommentInput';

function CommentInputContainer() {
  const [comment, setComment] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
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

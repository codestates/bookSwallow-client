import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CommentInput from '../../components/comment/CommentInput';
import { createComment } from '../../modules/comments';

function CommentInputContainer({ bookId }) {
  const [comment, setComment] = useState('');
  useSelector((state) => state.comments.comments);
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      dispatch(createComment(bookId, comment));
      setComment('');
    } else {
      alert('로그인을 해주세요');
    }
  };
  const onChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <CommentInput comment={comment} onChange={onChange} onSubmit={onSubmit} />
  );
}

export default CommentInputContainer;

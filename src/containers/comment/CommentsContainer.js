import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comments from '../../components/comment/Comments';
import { getComments, updateComment } from '../../modules/comments';
import { deleteComment } from '../../modules/comments';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function CommentsContainer({ bookId }) {
  const [isUpdate, setIsUpdate] = useState({
    isUpdate: false,
    commentId: null,
  });

  const [updateText, setUpdateText] = useState('');

  const [] = useState('');

  const { data, loading, error } = useSelector(
    (state) => state.comments.comments,
  );

  const { email, id: userId, isLogin, username } = useSelector(
    (state) => state.user,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(bookId));
  }, [dispatch, bookId]);

  const updateStateComment = (commentId, content) => {
    setIsUpdate({
      ...isUpdate,
      isUpdate: !isUpdate.isUpdate,
      commentId,
    });
    setUpdateText(content);
  };

  const updateOnChange = (event) => {
    setUpdateText(event.target.value);
  };

  const updateCommentHandler = (commentId, commentContent) => {
    dispatch(updateComment(commentId, commentContent));
    updateStateComment(commentId, commentContent);
  };

  const deleteCommentHandler = (commentId) => {
    dispatch(deleteComment(commentId, bookId));
  };

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;
  return (
    <Comments
      comments={data}
      isUpdate={isUpdate}
      userId={userId}
      updateText={updateText}
      updateStateComment={updateStateComment}
      updateOnChange={updateOnChange}
      deleteComment={deleteCommentHandler}
      updateCommentHandler={updateCommentHandler}
    />
  );
}

export default CommentsContainer;

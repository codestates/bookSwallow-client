import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comments from '../../components/comment/Comments';
import { getComments } from '../../modules/comments';
import { deleteComment } from '../../modules/comments';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function CommentsContainer({ bookId }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const { data, loading, error } = useSelector(
    (state) => state.comments.comments,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(bookId));
  }, [dispatch, bookId]);

  const updateComment = () => {
    console.log('업데이트');
    setIsUpdate(!isUpdate);
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
      updateComment={updateComment}
      deleteComment={deleteCommentHandler}
    />
  );
}

export default CommentsContainer;

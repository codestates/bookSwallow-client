import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Comments from '../../components/comment/Comments';
import { getComments } from '../../modules/comments';
import Loading from '../../components/common/Loading';
import Errors from '../../components/errors/Errors';
import Empty from '../../components/common/Empty';

function CommentsContainer({ bookId }) {
  const { data, loading, error } = useSelector(
    (state) => state.comments.comments,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(bookId));
  }, [dispatch, bookId]);

  if (loading) return <Loading />;
  if (error) return <Errors error={error} />;
  if (!data) return <Empty />;
  return <Comments comments={data} />;
}

export default CommentsContainer;

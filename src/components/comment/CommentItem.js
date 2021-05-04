import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  .username {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .created {
    color: #9da3aa;
  }

  span {
    color: #9da3aa;
    cursor: pointer;
  }
  span:hover {
    color: ${lighten(0.1, '#9da3aa')};
    user-select: none;
  }
  span + span {
    margin-left: 0.75rem;
  }
`;
const Comment = styled.div``;

const Container = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
    border-top: 1px solid #868e96;
    padding-top: 1rem;
  }
`;

function CommentItem({ comment, isUpdate, updateComment, deleteComment }) {
  return (
    <Container>
      <User>
        <div>
          <p className="username">{comment.user.username}</p>
          <p className="created">{comment.createdAt}</p>
        </div>
        <div>
          <span onClick={updateComment}>수정</span>
          <span onClick={() => deleteComment(comment.id)}>삭제</span>
        </div>
      </User>
      <Comment>
        {!isUpdate ? (
          <p>{comment.content}</p>
        ) : (
          <textarea value={comment.content} />
        )}
      </Comment>
    </Container>
  );
}

export default CommentItem;

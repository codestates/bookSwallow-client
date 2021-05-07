import { lighten, darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';

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

const UpdateDiv = styled.div``;
const UpdateText = styled.textarea`
  resize: none;
  width: 30%;
  height: 5rem;
  padding: 0.75rem 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1rem;

  border: 1px solid #adb5bd;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const ButtonDiv = styled.div`
  margin-top: 0.8rem;
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  ${(props) => {
    const selectedColor = props.color;
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}

  &:not(:first-child) {
    margin-left: 0.8rem;
  }
`;

function CommentItem({
  comment,
  isUpdate,
  userId,
  updateText,
  updateOnChange,
  updateStateComment,
  deleteComment,
  updateCommentHandler,
}) {
  moment.locale('ko');
  return (
    <Container>
      <User>
        <div>
          <p className="username">{comment.user.username}</p>
          <p className="created">{moment(comment.createdAt).fromNow()}</p>
        </div>
        {userId === comment.user_id && (
          <div>
            <span
              onClick={() => {
                updateStateComment(comment.id, comment.content);
              }}
            >
              수정
            </span>
            <span onClick={() => deleteComment(comment.id)}>삭제</span>
          </div>
        )}
      </User>
      <Comment>
        {isUpdate.isUpdate && comment.id === isUpdate.commentId ? (
          <UpdateDiv>
            <UpdateText
              value={updateText}
              onChange={updateOnChange}
            ></UpdateText>
            <ButtonDiv>
              <Button
                color="#a78560"
                onClick={() => {
                  updateCommentHandler(comment.id, updateText);
                }}
              >
                수정
              </Button>
              <Button
                color="#ADB5BD"
                onClick={() => {
                  updateStateComment(comment.id, comment.content);
                }}
              >
                취소
              </Button>
            </ButtonDiv>
          </UpdateDiv>
        ) : (
          <p>{comment.content}</p>
        )}
      </Comment>
    </Container>
  );
}

export default React.memo(CommentItem);

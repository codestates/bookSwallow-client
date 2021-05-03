import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

const TextArea = styled.textarea`
  resize: none;
  width: 89%;
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
const Specer = styled.div`
  width: 1%;
`;
const Button = styled.button`
  width: 10%;
  min-width: 5rem;
  height: 5rem;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  background: #a78560;

  &:hover {
    background: ${lighten(0.1, '#A78560')};
  }
  &:active {
    background: ${darken(0.1, '#A78560')};
  }
`;

const Container = styled.div`
  display: flex;
`;
function CommentInput() {
  return (
    <Container>
      <TextArea placeholder="댓글을 작성하세요." autoFocus />
      <Specer />
      <Button>작성</Button>
    </Container>
  );
}

export default CommentInput;

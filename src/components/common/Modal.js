import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;
const fadeOut = keyframes`
  from{
    opacity: 1
  }
  to{
    opacity: 0
  }
`;
const slideUp = keyframes`
  from{
    transform: translateY(200px);
  }
  to{
    transform: translateY(0px);
  }
`;
const slideDown = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(200px);
  }
`;

const ModalBack = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;
const ModalBox = styled.div`
  width: 340px;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;
const StyledBtn = styled(Button)`
  height: 2rem;
  padding: 0.5rem 1rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const Modal = ({ visible, content, onCancel, onConfirm }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalvisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalvisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;

  return (
    <ModalBack disappear={!visible}>
      <ModalBox disappear={!visible}>
        <p>{content}</p>
        <div className="buttons">
          <StyledBtn onClick={onCancel} line>
            취소
          </StyledBtn>
          <StyledBtn onClick={onConfirm}>확인</StyledBtn>
        </div>
      </ModalBox>
    </ModalBack>
  );
};

export default Modal;

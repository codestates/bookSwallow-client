import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { darken, lighten } from 'polished';

const buttonStyle = css`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  outline: none;
  cursor: pointer;

  background: ${palette.brown};
  &:hover {
    background: ${lighten(0.05, palette.brown)};
    color: #444;
  }
  &:active {
    background: ${darken(0.1, palette.brown)};
  }

  ${(props) =>
    props.sideButton &&
    css`
      background: ${palette.gray};
      &:hover {
        background: ${lighten(0.1, palette.gray)};
      }
      &:active {
        background: ${darken(0.1, palette.gray)};
      }
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
      font-size: 1.2rem;
      font-weight: 600;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

const Button = (props) => {
  return (
    <StyledButton {...props} sideButton={props.sideButton}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

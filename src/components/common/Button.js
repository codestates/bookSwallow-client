import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../lib/styles/palette'
import { darken, lighten } from 'polished';

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    padding: 1rem 4rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.button[0]};
    &:hover {
        background: ${lighten(0.1, palette.button[0])};
    }
    &:active {
        background: ${darken(0.1, palette.button[0])};
      }
    
    ${(props) =>
        props.sideButton &&
        css`
        background: ${palette.button[1]};
        &:hover {
            background: ${lighten(0.1, palette.button[1])};
        }
        &:active {
            background: ${darken(0.1, palette.button[1])};
          }
        `
    }
`

const StyledButton = styled.button`
${ buttonStyle };
`

const Button = (props) => {
    return <StyledButton {...props} sideButton={props.sideButton}>{props.children}</StyledButton>
}

export default Button
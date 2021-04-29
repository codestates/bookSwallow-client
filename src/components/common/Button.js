import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../lib/styles/palette'
import { darken, lighten } from 'polished';

const buttonStyle = css`
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 1rem 2rem;
    color: gray;
    outline: none;
    cursor: pointer;
    margin-bottom: 1rem;

    background: "#D7CCC8"
    &:hover {
        background: ${lighten(0.1, "#D7CCC8")};
    }
    &:active {
        background: ${darken(0.1, "#D7CCC8")};
      }

    ${(props) =>
        props.sideButton &&
        css`
        background: "#C4C4C4"
        &:hover {
            background: ${lighten(0.1, "#C4C4C4")};
        }
        &:active {
            background: ${darken(0.1, "#C4C4C4")};
          }
        
        & + & {
            margin-left: 2rem;
            margin-top: 1rem;
        }
        `
    }
`

const StyledButton = styled.button`
${ buttonStyle };
`

const Button = (props) => {
    return (
    <StyledButton {...props} 
        sideButton={props.sideButton}
        >{props.children}
    </StyledButton>
    )
}

export default Button
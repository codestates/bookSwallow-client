import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import palette from '../../lib/styles/palette';
const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color : inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        background-color: ${palette.background};
    }
    html, body{
        height: 100%;
        overflow: auto;
    }
    #root{
        min-height: 100%;
    }
 `;

export default GlobalStyles;

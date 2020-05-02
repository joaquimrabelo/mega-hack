import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
        color: #748A9D;
        -webkit-font-smoothing: antialised;
    }
    button {
        cursor: pointer;
    }
    .card__img-place {
        border-radius: 12pt;
    }
`;

export default GlobalStyle;
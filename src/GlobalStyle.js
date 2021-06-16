import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }

    img{
        display: inline-block;
        max-width: 100%;
    }
`
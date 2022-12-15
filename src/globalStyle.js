import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar{
    width: 7px;
    background-color: transparent;
}

::-webkit-scrollbar-thumb{
    width: 2px;
    background-color: black;
}
`
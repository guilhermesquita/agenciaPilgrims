import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

::-webkit-scrollbar{
    width: 7px;
    background-color: black;
}

::-webkit-scrollbar-thumb{
    width: 2px;
    background-color: gray;
    border-radius: 10px;
}
`
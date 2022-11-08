import styled from "styled-components";

export const HeaderStyle = styled.header`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 150px;
    width: 60%;
    gap: 50px;
`

export const Button = styled.button `
    border: red;
    background-color: white;
    cursor: pointer;
`

export const MainTxt = styled.p `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #222222;
    font-size: 80px;
`

export const MiniTxt = styled.p `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 400;
    color: #8D8E90;
`
export const Txts = styled.article `
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const TxtButton = styled.article `
    display: flex;
    gap: 50px;
`
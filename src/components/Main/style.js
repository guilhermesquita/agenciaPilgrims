import styled from "styled-components";

export const MainPage = styled.main `
    padding-left: 10%;
    display: flex;
    
    section:nth-child(1){
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 90px;
        article{
            display: flex;
            flex-direction: column;
            gap: 30px;
            p{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #1E1E1E;
            font-size: 50px;
            width: 60%;
            }
        }
    }
    section:nth-child(2){
        background-color: #FF5200;
        width: 50%;
        padding-top: 20px;
        img{
            margin-left: 70%;
        }
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    label{
        margin-top: 20px;
    }
    input{
        width: 45%;
        border: 0;
        border-bottom: 4px #FF5200 solid;
        outline: 0;
        transition: 0.9s;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: #FF5200;
        :focus{
            font-size: 20px;
            border-bottom: 4px #816F67 solid;
            width: 50%;
        }
    }
`

export const Button = styled.button `
    width: 33%;
    height: 42px;
    border-radius: 40px;
    color: white;
    background-color: black;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 100%;
    border: 0;
    transition: 0.5s;
    :hover{
        background-color: gray;
    }
`
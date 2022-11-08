import React from "react";
import Logo from '../../../assets/Logo.svg'
import button from '../../../assets/button.svg'
import { HeaderStyle, Button, MainTxt, MiniTxt, Txts, TxtButton, Span1 } from "./Style";

export default function Header() {

    function ola(){
        alert('ola')
    }

    return (
        <HeaderStyle>
            <img src={Logo} height='50px' />
            <Txts>
                <MainTxt>comece hoje a sua mudança</MainTxt>
                <TxtButton>
                    <MiniTxt>Venha para uma agência de Marketing 100% focada no seu resultado.</MiniTxt>
                    <a href="#"><Button onClick={ola}><img src={button} height='50px'/></Button></a>
                </TxtButton>
            </Txts>
        </HeaderStyle>
    )
}
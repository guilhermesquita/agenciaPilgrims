import React from "react";
import fourpoints from '../../../assets/fourpoints.svg'
import Logo from '../../../assets/Logo.svg'
import { HeaderStyle } from "./Style";

export default function Header() {
    return (
        <HeaderStyle>
            <img src={Logo} />
            <img src={fourpoints} />
        </HeaderStyle>
    )
}
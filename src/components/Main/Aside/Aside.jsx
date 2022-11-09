import React from "react";
import { AsideStyle, Article, Pointer } from "./Style";
import fourpoint from '../../../assets/fourpoints.svg'
import logo from '../../../assets/logoOpacity.svg'

export default function Aside() {
    return (
        <Article>
            <AsideStyle>
                <Pointer>
                    <img src={fourpoint} height='20px'/>
                </Pointer>
                <img src={logo} height='210px'/>
            </AsideStyle>
        </Article>
    )
}
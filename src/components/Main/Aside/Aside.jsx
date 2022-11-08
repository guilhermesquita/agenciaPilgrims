import React from "react";
import { AsideStyle, Article, Pointer } from "./Style";
import fourpoint from '../../../assets/fourpoints.svg'

export default function Aside() {
    return (
        <Article>
            <AsideStyle>
                <Pointer>
                    <img src={fourpoint} height='20px'/>
                </Pointer>
            </AsideStyle>
        </Article>
    )
}
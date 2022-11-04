import React from "react";
import fourpoints from '../assets/fourpoints.svg'

export default function Header() {
    return (
        <header>
            <img src="https://picsum.photos/seed/picsum/200/300" />
            <img src={fourpoints} />
        </header>
    )
}
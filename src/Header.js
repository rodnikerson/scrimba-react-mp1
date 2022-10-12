import React from "react";
import earth from "./earth.png"

export default function Header() {
    return (
        <header>
            <img className="logo" src={earth} alt="World" />
            <h3>my travel journal.</h3>
        </header>
    )
}
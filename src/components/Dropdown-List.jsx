import { useState } from "react";
import "/src/styles/Header.css";

export default function DropdownList() {
    return (
        <div className="list-cnt">
            <a href="/projects/citrus-season">Citrus Season</a>
            <a href="">Room With a View</a>
            <a href="">True Romance</a>
            <a href="">Power Suit</a>
        </div>
    );
}
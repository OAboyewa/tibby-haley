import { useState } from "react";
import "/src/styles/Header.css";

export default function DropdownList() {
    return (
        <div className="list-cnt">
            <a href="/projects/citrus-season">Citrus Season</a>
            <a href="/projects/room-with-view">Room With a View</a>
            <a href="/projects/true-romance">True Romance</a>
            <a href="/projects/power-suit">Power Suit</a>
        </div>
    );
}
import { useEffect, useState } from "react";
import "/src/styles/Header.css";
import "/src/styles/Text.css";
import DropdownList from "/src/components/Dropdown-List.jsx";

export default function Header() {
    useEffect(() => {
        const el = document.querySelector("li.dropdown-cnt");

        el.addEventListener("mouseenter", (e) => {
        el.dataset.content = "inactive";
        //console.log(el.dataset.content);
        });

        el.addEventListener("mouseleave", (e) => {
            el.dataset.content = "active";
            setTimeout(() => {
                if (el.dataset.content === "active") {
                el.dataset.content = "inactive";
                //console.log("timeout 0n: ", el.dataset.content);
                }
            }, 2000);
        });
    });
    
    return (
        <header>
            <span>
                <a href="/" className="ft-primary h3 color-primary">Tibby Haley</a>
            </span>
            <ul className="nav-menu-cnt ft-secondary color-primary">
                <li className="dropdown-cnt" data-content="inactive">
                    <span>Work</span>
                    <DropdownList />
                </li>
                <li><a href="/bio">Bio</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </header>
    );
}
import { useEffect, useState } from "react";
import "/src/styles/Header.css";
import "/src/styles/Text.css";
import DropdownList from "/src/components/Dropdown-List.jsx";

export default function Header() {
    return (
        <header>
            <span>
                <a href="" className="ft-primary h3 color-primary">Tibby Haley</a>
            </span>
            <ul className="nav-menu-cnt ft-secondary color-primary">
                <li className="dropdown-cnt">
                    <span>Work</span>
                    {/*<DropdownList></DropdownList>*/}
                </li>
                <li><a href="">Bio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </header>
    );
}
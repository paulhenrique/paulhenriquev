import React from 'react';
import { Link } from "react-scroll";

import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <section id="title-site">
                <p>@paulhenrique</p>
            </section>
            <section>
                <ul class="navbar-items">
                    <li class="navbar-item">
                        <Link
                            to="header"
                            spy={true}
                            smooth={true}
                            
                            duration={500}>Inicio</Link>
                    </li>
                    <li class="navbar-item">
                    <Link
                            to="graphic"
                            spy={true}
                            smooth={true}
                            
                            duration={500}>Graphic</Link>
                    </li>
                    <li class="navbar-item">
                    <Link
                            to="webapps"
                            spy={true}
                            smooth={true}
                            
                            duration={500}>WebApps</Link>
                    </li>
                    <li class="navbar-item">
                    <Link
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={700}
                            duration={500}>Contato</Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar;
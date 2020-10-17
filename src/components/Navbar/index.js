import React from 'react';
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
                        <a href="#header">Início</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#graphic">Graphic</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#webapps">Webapps</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar;
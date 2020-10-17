import React from 'react';
import './style.css';

function Footer() {
    return (
        <div id="footer">
            <div class="contain-elements">
                <header>
                    <h1>Contato</h1>
                    <p>entre em contato comigo através das <span>redes sociais</span> ou email</p>
                </header>
                <div class="social_links">
                    <ul>
                        <li>
                            <a href="https://www.google.com/">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Email</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Whatsapp</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
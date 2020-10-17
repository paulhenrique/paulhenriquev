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
                            <a target="_blank" href="https://www.facebook.com/paulhenriquev/">Facebook</a>
                        </li>
                        <li>
                            <a target="_blank" href="mailto:phvcandido@gmail.com">Email</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5515997088134&text=Ol%C3%A1%2C%20Paulo!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site!">Whatsapp</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/paulhenrique">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import React from 'react';
import './style.css';
import card1 from '../../assets/image/img1.png';

function Graphic(){
    return (
        <div id="graphic">
            <header>
                <h1>Graphic Works</h1>
            </header>
            <section class="container-items">
            <div class="card-item">
                    <h3 class="card-title">Projeto Cada Gota Vale</h3>
                    <img src={card1} alt="Cada Gota Vale" class="card-image"/>
                </div>
                <div class="card-item">
                    <h3 class="card-title">Projeto Cada Gota Vale</h3>
                    <img src={card1} alt="Cada Gota Vale" class="card-image"/>
                </div>
                <div class="card-item">
                    <h3 class="card-title">Projeto Cada Gota Vale</h3>
                    <img src={card1} alt="Cada Gota Vale" class="card-image"/>
                </div>
                <div class="card-item">
                    <h3 class="card-title">Projeto Cada Gota Vale</h3>
                    <img src={card1} alt="Cada Gota Vale" class="card-image"/>
                </div>
                <div class="card-item">
                    <h3 class="card-title">Projeto Cada Gota Vale</h3>
                    <img src={card1} alt="Cada Gota Vale" class="card-image"/>
                </div>
            </section>
        </div>
    )
}

export default Graphic;
import React from 'react';
import Card from '../card';
import './style.css';
import card1 from '../../assets/image/img1.png';


function Graphic() {
    return (
        <div id="graphic">
            <header>
                <h1>Graphic Works</h1>
            </header>

            <section class="container-items">
                <Card cardImage={card1} cardTitle="Cada Gota Vale" />
                <Card cardImage={card1} cardTitle="Cada Gota Vale" />
                <Card cardImage={card1} cardTitle="Cada Gota Vale" />
                <Card cardImage={card1} cardTitle="Cada Gota Vale" />
                <Card cardImage={card1} cardTitle="Cada Gota Vale" />
            </section>



        </div>
    )
}

export default Graphic;
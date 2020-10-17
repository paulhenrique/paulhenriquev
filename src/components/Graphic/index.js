import React from 'react';
import Card from '../card';
import Tada from 'react-reveal/Tada';

import './style.css';
import card1 from '../../assets/image/card1.png';
import card2 from '../../assets/image/card2.png';
import card3 from '../../assets/image/card3.png';
import card4 from '../../assets/image/card4.png';
import card5 from '../../assets/image/card5.png';


function Graphic() {
    return (
        <div id="graphic">
            <header>
                <h1>Graphic Works</h1>
            </header>

            <section class="container-items">
                <Tada left>
                    <Card cardImage={card1} cardTitle="Projeto Cada Gota Vale" />
                    <Card cardImage={card2} cardTitle="IFSP Campus Itapetininga" />
                    <Card cardImage={card3} cardTitle="Prefeitura de Itapetininga" />
                    <Card cardImage={card4} cardTitle="OBPC Itapetininga" />
                    <Card cardImage={card5} cardTitle="Hello Yotta" />
                </Tada>



            </section>
        </div>
    )
}

export default Graphic;
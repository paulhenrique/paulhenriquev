import React from 'react';
import Tilty from 'react-tilty'

function Card(props) {
    return (
        <Tilty style={{ transformStyle: "preserve-3d" }}>
            <div class="card-item">
                <h3 class="card-title">{props.cardTitle}</h3>
                <img src={props.cardImage} alt="Cada Gota Vale" class="card-image" />
            </div>
        </Tilty>
    )
}

export default Card;
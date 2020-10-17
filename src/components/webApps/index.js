import React from 'react';
import Card from '../card';
import './style.css';
import webapp1 from '../../assets/image/webapp1.png';
import webapp2 from '../../assets/image/webapp2.png';
import webapp3 from '../../assets/image/webapp3.png';
import webapp4 from '../../assets/image/webapp4.png';
import webapp5 from '../../assets/image/webapp5.png';


function WebApps() {
    return (
        <div id="webapps">
            <header>
                <h1>Web Apps</h1>
            </header>

            <section class="container-items">
                <Card cardImage={webapp1} cardTitle="IV e V worktech" />  
                <Card cardImage={webapp3} cardTitle="panda project" />
                <Card cardImage={webapp5} cardTitle="carlos santos" />
                <Card cardImage={webapp2} cardTitle="optweex" />
                <Card cardImage={webapp4} cardTitle="encontro de diversidades" />
            </section>
        </div>
    )
}

export default WebApps;
import React from 'react';
import books from '../../../assets/img/homeHeroBg.png'

const HomeHero = () => {
    return (
        <section id="hero">
            <img src={books} alt=""/>
            <div className="container">
                <div className="block">
                    <h1 className="block--book">BUY BOOKS WHEREVER YOU ARE</h1>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
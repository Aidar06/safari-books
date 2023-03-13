import React, {useContext} from 'react';
import books from '../../../assets/img/homeHeroBg.png'
import {Language} from "../../Context";

const HomeHero = () => {
    const {language} = useContext(Language)
    return (
        <section id="hero">
            <img src={books} alt=""/>
            <div className="container">
                <div className="block">
                    <h1 className="block--book">{
                        language === 'en'? 'BUY BOOKS WHEREVER YOU ARE': language === 'ru' ? 'ПОКУПАЙТЕ КНИГИ, ГДЕ ВЫ НАХОДИТЕСЬ' : 'КИТЕПТЕРДИ КАЙДА БОЛСОНУЗДА САТЫП АЛЫҢЫЗ'
                    }</h1>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;